
function DrawMouseDown()
{
    if(isHoldingMouse)
    {
    c.fillStyle = "red";
    c.fillRect(mousePosition.X, mousePosition.Y, 10, 10);

    document.getElementById("cordenadas2").innerHTML = "X: " + mousePosition.X + " , Y: " + mousePosition.Y;
    }
}


