var lastXPosition, lastYPosition;

var canvas = document.getElementById("canvas");
var canvasReference = canvas.getContext("2d");

var color = "teal";
var widthLine = 2;
var widthScreen = screen.width;
var width = width - 70;
var heightScreen = screen.height;
var height = height - 200;

if(widthScreen<992) {
    document.getElementById("canvas").width=width;
    document.getElementById("canvas").height=height;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart", touchStart);

function touchStart(e) {
    console.log("touchstart");
    lastXPosition=e.touches[0].clientX-canvas.offsetLeft;
    lastYPosition=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove", touchMove);

function touchMove(e) {
    console.log("touchmove");

    currentXPosition=e.touches[0].clientX-canvas.offsetLeft;
    currentYPosition=e.touches[0].clientY-canvas.offsetTop;

    canvasReference.beginPath();
    canvasReference.strokeStyle=color;
    canvasReference.lineWidth=widthLine;

    console.log("lastXPosition = "+lastXPosition+", "+"lastYPosition = "+lastYPosition);
    canvasReference.moveTo(lastXPosition, lastYPosition);

    console.log("currentXPosition = "+currentXPosition+", "+"currentYPosition = "+currentYPosition);
    canvasReference.lineTo(currentXPosition, currentYPosition);
    canvasReference.stroke();
}

function clearCanvas() {
    canvasReference.clearRect(0, 0, canvasReference.canvas.width, canvasReference.canvas.height);
}