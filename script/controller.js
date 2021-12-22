let canvas = document.getElementById("game");
let c = canvas.getContext("2d");
let rect = canvas.getBoundingClientRect();
let mousePosition = 
{
    X : 0,
    Y : 0,
}
let isHoldingMouse = false;

let jogo;

var Status = "drawing";

function setEvents()
{
    if(Status == "drawing")
    {
        DrawMouseDown()
    }
}

function SetMousePosition(event)
{

    mousePosition.X = event.clientX - rect.left;
    mousePosition.Y = event.clientY - rect.top;
    document.getElementById("cordenadas").innerHTML = "X: " + mousePosition.X + " , Y: " + mousePosition.Y;
    jogo = setInterval(setEvents(), 0.1);
}

function MouseDown()
{
    isHoldingMouse = true;
    jogo = setInterval(setEvents(), 0.1);
}

function MouseUp()
{
    isHoldingMouse = false;
}

jogo = setInterval(setEvents(), 0.1);

