<script lang="ts" context="module">

    let barsCssChief: String[] = [];
    let barsCssDelphi: String[] = [];
    //Fabrication
    let chiefWidthFab = 30;
    let delphiWidthFab = 100;

    let chiefDisplayFab = `${chiefWidthFab}%`;
    let delphiDisplayFab = `${delphiWidthFab}%`;

    barsCssChief.push(`width:${chiefDisplayFab}; fab`);
    barsCssDelphi.push(`width:${delphiDisplayFab}; fab`);

    //Controls

    let chiefWidthControls = 20;
    let delphiWidthControls = 80;

    let chiefDisplayControls = `${chiefWidthControls}`;
    let delphiDisplayControls = `${delphiWidthControls}%`;

    barsCssChief.push(`width:${chiefDisplayControls}; contols`);
    barsCssDelphi.push(`width:${delphiDisplayControls}; controls`);

    //Software

    let chiefWidthSoftware= 20;
    let delphiWidthSoftware = 55;

    let chiefDisplaySoftware = `${chiefWidthSoftware}`;
    let delphiDisplaySoftware = `${delphiWidthSoftware}%`;

    barsCssChief.push(`width:${chiefDisplaySoftware}; software`);
    barsCssDelphi.push(`width:${delphiDisplaySoftware}; software`);
    
</script>
<style>

    .container {
        background-color: rgb(192, 192, 192);
        width: 110%;
        border-radius: 15px;
        text-align: center;
        vertical-align: center;
        position: fixed;
        left:0;
        right:0;
        height: 50%;
    }
    
    .bar {
        background-color: rgb(216, 18, 0);
        color: white;
        padding: 1%;
        text-align: center;
        font-size: 20px;
        border-radius: 15px;
        height: 1;
        
        /*position: absolute;
        top:50%;*/

    }
    
    .delphiContainer{
        top:8%;
    }
    
    .chiefContainer{
        top:55%;
        bottom:0;
    }

    h3{
        background-color: grey;
    }

    .barContainer{
        height:30%
    }


    .fab{
        top:0%;
    }
    
    .controls{
        top:50%;
        bottom:50%;
    }

    .software{
        bottom: 0%;

    }
</style>

<div class='container delphiContainer'>
    
    <h3><strong>Delphi</strong></h3>
        {#each barsCssDelphi as css}
        <div class="barContainer">
            <h3>{css.split(" ")[1]}</h3>
            <div class="bar delphi {css.split(" ")[1]}" style="{css.split(" ")[0]}"></div>
        </div>
        {/each}
</div>
<br/>
<div class="container chiefContainer">
    <h3><strong>Chief</strong></h3>
        {#each barsCssChief as css}
        <div class="barContainer">
            <h3>{css.split(" ")[1]}</h3>
            <div class="bar chief {css.split(" ")[1]}" style="{css.split(" ")[0]}"></div>
        </div>
        {/each}
</div>