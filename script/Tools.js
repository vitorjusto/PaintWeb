let canvasTools = document.getElementById("Tools");
let ct = canvasTools.getContext("2d");
let rectT = canvasTools.getBoundingClientRect();
let ToolsInterval;
function MouseClickTools(event)
{
    
}

function SetToolsEvents()
{
    if(Status == "drawing")
    {
        drawTools();
    }
}

function drawTools()
{
    ct.fillStyle = "rgb(150, 150, 150)";
    ct.fillRect(0, 0, 1024, 128);
}
ToolsInterval = setInterval(SetToolsEvents(), 1);
