/* The code for our drawing application! 
Feel free to delete any/all of it and replace with your own functionality. */

var path;
var currentColor = 'black';
var lastColor = "black";
var currentWidth = 5;
var erased = false;

// var myCircle = new Path.Circle(new Point(100, 70), 50);
// myCircle.fillColor = currentColor;

function onResize(event) {
	// Whenever the window is resized, recenter the path:
	path.position = view.center;
}

tool.onMouseDown = function(event) { //This code in this function is called whenever the mouse is clicked.
    path = new Path();     // Create a new path each time.
    path.add(event.point);
    path.strokeColor = currentColor;
    path.strokeWidth = currentWidth;
    console.log(event.point); //this commands log to the Console the coordinates of the mouse click. Feel free to delete it! 
}
tool.onMouseDrag = function(event) {
    path.add(event.point); //Add points to the path as the user drags their mouse.
}

$('#default').on('click', function (e) { //jquery click event code for our "pencil" button.
    currentColor = 'black';  //change the color to black
    currentWidth = 5;       //change the width to 5
})
$('#thick-green').on('click', function (e) { //jquery button click code for our "green paint" button.
    currentColor = 'green';
    currentWidth = 15;
})

// Sizing
$('#xs').on('click', function (e) { //jquery button click code for our "green paint" button.
    if (erased === true) {
        currentColor = lastColor;
    } 
    currentWidth = 5;
    erased = false;
})
$('#sm').on('click', function (e) { //jquery button click code for our "green paint" button.
    if (erased === true) {
        currentColor = lastColor;
    } 
    currentWidth = 10;
    erased = false;

})
$('#md').on('click', function (e) { //jquery button click code for our "green paint" button.
     if (erased === true) {
        currentColor = lastColor;
    } 
    currentWidth = 20;
    erased = false;

})
$('#lg').on('click', function (e) { //jquery button click code for our "green paint" button.
    if (erased === true) {
        currentColor = lastColor;
    } 
    currentWidth = 50;
    erased = false;

})

// Eraser Sizing
$('#eraser-md').on('click', function (e) { //jquery button click code for our eraser button.
    lastColor = currentColor;
    currentColor = 'white';
    currentWidth = 20;
    erased = true;
})
$('#eraser-sm').on('click', function (e) { //jquery button click code for our eraser button.
    lastColor = currentColor;
    currentColor = 'white';
    currentWidth = 10;
    erased = true;
})
$('#eraser-lg').on('click', function (e) { //jquery button click code for our eraser button.
    lastColor = currentColor;
    currentColor = 'white';
    currentWidth = 50;
    erased = true;
})
$('#eraser-xs').on('click', function (e) { //jquery button click code for our eraser button.
    lastColor = currentColor;
    currentColor = 'white';
    currentWidth = 5;
    erased = true;
})