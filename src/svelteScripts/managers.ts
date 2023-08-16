import ManagerControlPanel from "../components/managerControlPanel.svelte";

let data: any;
let signedIn = false;
export let departmentSignedIn: any;
export function getResponseData(file: RequestInfo | URL) : Promise<any> | undefined {
  if(typeof(data) === "undefined") {
        fetch(file)
        .then(res => {
            data = res.json();
            return data;
        }).catch((error) =>{
            console.log(error)
        });
  } else {
        return Promise.resolve(data);
  }
}


async function login(event: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement; }) {
    let formData = new FormData();

    const password = formData.get("password")?.toString() ?? "";
    const username = formData.get("username")?.toString() ?? "";

    let data = await getResponseData("../secrets/managers.json");

    if(data.hasOwnProperty(username)){
        if(data[username]["password"] == password){
            departmentSignedIn = data[username]["department"];
            signedIn = true;
            console.log(`Logged in ${username} for department ${departmentSignedIn}`)
        }
    }
}