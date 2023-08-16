<script>
    import { tweened } from "svelte/motion"
    import { departmentSignedIn, getResponseData } from "../routes/managers.svelte"
    var fs = require('fs');
    let percentCheckpoint;
    let deadline;
    let goal;
    let primeManager;
    let robot;
    const progress = tweened(0, {
        duration: 400,
        easing: cubicOut
    });

    function writeCheckpoint(){
        let data = getResponseData("../secrets/checkpoints.json");

        if(data.hasOwnProperty(departmentSignedIn)){
            let checkpoint = {
                [`${departmentSignedIn}`]:{
                    "Deadline": `${deadline}`,
                    "Goal": `${goal}`,
                    "Primary Manaer": `${primeManager}`
                }
            };
            data = data[robot][departmentSignedIn].push(checkpoint);
            data = JSON.stringify(data);
            fs.writeFile("../secrets/checkpoints.json", data, 'utf8', callback);
        }
    }
</script>

<div>
    <progress value="{$progress}"></progress>

    <div class="addCheckpoints">
        <label><input type="text" bind:value={robot} placeholder="robot"></label>
        <label><input type="text" bind:value={primeManager} placeholder="prime manager"></label>
        <label><input type="text" bind:value={goal} placeholder="goal"></label>
        <label><input type="text" bind:value={deadline} placeholder="deadline"></label>
        <label><input type="text" bind:value={percentCheckpoint} placeholder="percent"></label>

        <button on:click={writeCheckpoint} disabled="{!percentCheckpoint | !primeManager | !goal | !deadline}">
            {percentCheckpoint}
        </button>
    </div>
</div>