/* The code for our drawing application! 
Feel free to delete any/all of it and replace with your own functionality. */
var path;
var currentColor = 'black';
var lastColor = "black";
var currentWidth = 5;
var erased = false;
var circle = false;
var square = false;
var triangle = false;
var decagon = false;
function onResize(event) {
    // Whenever the window is resized, recenter the path:
    path.position = view.center;
}


tool.onMouseDown = function(event) { //This code in this function is called whenever the mouse is clicked.
    path = new Path();     // Create a new path each time.
    
    // Adding the circle
    if (circle === true) {
        path.add(new Shape.Circle({
            center: event.point,
            radius: 30,
            strokeColor: currentColor,
            fillColor: currentColor
        }));
        console.log(event.point); //this commands log to the Console the coordinates of the mouse click. Feel free to delete it!
    }
    
    // Added the square
    else if (square === true) {
        path.add(new Shape.Rectangle({
            point: event.point,
            size: [50, 50],
            strokeColor: currentColor,
            fillColor: currentColor
        }));
        console.log(event.point); //this commands log to the Console the coordinates of the mouse click. Feel free to delete it!
    }
   
    //Added the triangle
    else if (triangle ===true) {
        path.add(new Shape.RegularPolygon({
            point: event.point,
            sides: 3,
            strokeColor: currentColor,
            fillColor: currentColor
        }));
        console.log(event.point); //this commands log to the Console the coordinates of the mouse click. Feel free to delete it!
    }
    //Added the decagon
    else if (decagon ===true) {
        path.add(new Shape.RegularPolygon({
            point: event.point,
            sides: 10,
            strokeColor: currentColor,
            fillColor: currentColor
        }));
        console.log(event.point); //this commands log to the Console the coordinates of the mouse click. Feel free to delete it!
    }
    // normal pen tool
    else {
        path.add(event.point);
        path.strokeColor = currentColor;
        path.strokeWidth = currentWidth;
        console.log(event.point); //this commands log to the Console the coordinates of the mouse click. Feel free to delete it!
    }
    
    
}
tool.onMouseDrag = function(event) {
    if (square === true) {
        path.add(new Shape.Rectangle({
            point: event.point,
            size: [50, 50],
            strokeColor: currentColor,
            fillColor: currentColor
        }));
    }
    else if (circle === true) {
        path.add(new Shape.Circle({
            center: event.point,
            radius: 30,
            strokeColor: currentColor,
            fillColor: currentColor
        }));
    }
    else if (triangle === true) {
        var triangle1 = new Path.RegularPolygon(new Point(80, 70), 3, 50);
        path.add(triangle1);
        decagon1.fillColor = currentColor;
      
    }
    else if (decagon === true) {
        var decagon1 = new Path.RegularPolygon(event.point, 10, 50);
        path.add(decagon1);
        decagon1.fillColor = currentColor;
    }
    path.add(event.point); //Add points to the path as the user drags their mouse.
}

// Make shapes
$('#circle').on('click', function (e) {
    if (square === true){
        square = false;
    }
    else if (triangle === true) {
        triangle = false;
    }
    else if (decagon === true) {
        decagon = false;
    }
    circle = true;
})
$('#square').on('click', function (e) {
    if (circle === true){
        circle = false;
    }
    else if (triangle === true) {
        triangle = false;
    }
    else if (decagon === true) {
        decagon = false;
    }
    square = true;
})
$('#triangle').on('click', function (e) {
    if (square === true){
        square = false;
    }
    else if (circle === true) {
        circle = false;
    }
    else if (decagon === true) {
        decagon = false;
    }
    triangle = true;    
    console.log(triangle + 'here');

})
$('#decagon').on('click', function (e) {
    if (square === true){
        square = false;
    }
    else if (circle === true) {
        circle = false;
    }
    else if (triangle === true) {
        triangle = false;
    }
    decagon = true;
})
// colors
$('#pen-color').on('click', function (e) {
    console.log($(this).val())
    currentColor = '' + $(this).val();
})
$('#red').on('click', function (e) {
    currentColor = '#FA5659';
})
$('#orange').on('click', function (e) {
    currentColor = "#F7A34A";
})
$('#yellow').on('click', function (e) {
    currentColor = '#F8D042';
})
$('#green').on('click', function (e) {
    currentColor = '#62B64D';
})
$('#blue').on('click', function (e) {
    currentColor = '#227694';
})
$('#purple').on('click', function (e) {
    currentColor = '#484572';
})
$('#pink').on('click', function (e) {
    currentColor = '#DC488A';
})
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
    circle = false;
    square = false;
    triangle = false;
    decagon = false;
    if (erased === true) {
        currentColor = lastColor;
    } 
    currentWidth = 5;
    erased = false;
})
$('#sm').on('click', function (e) { //jquery button click code for our "green paint" button.
    circle = false;
    square = false;
    triangle = false;
    decagon = false;
    if (erased === true) {
        currentColor = lastColor;
    } 
    currentWidth = 10;
    erased = false;
})
$('#md').on('click', function (e) { //jquery button click code for our "green paint" button.
    circle = false;
    square = false;
    triangle = false;
    decagon = false;
     if (erased === true) {
        currentColor = lastColor;
    } 
    currentWidth = 20;
    erased = false;
})
$('#lg').on('click', function (e) { //jquery button click code for our "green paint" button.
    circle = false;
    square = false;
    triangle = false;
    decagon = false;
    if (erased === true) {
        currentColor = lastColor;
    } 
    currentWidth = 50;
    erased = false;
})
// Eraser Sizing
$('#eraser-md').on('click', function (e) { //jquery button click code for our eraser button.
    lastColor = currentColor;
    circle = false;
    square = false;
    triangle = false;
    decagon = false;
    currentColor = 'white';
    currentWidth = 20;
    erased = true;
})
$('#eraser-sm').on('click', function (e) { //jquery button click code for our eraser button.
    lastColor = currentColor;
    circle = false;
    square = false;
    triangle = false;
    decagon = false;
    currentColor = 'white';
    currentWidth = 10;
    erased = true;
})
$('#eraser-lg').on('click', function (e) { //jquery button click code for our eraser button.
    lastColor = currentColor;
    circle = false;
    square = false;
    triangle = false;
    decagon = false;
    currentColor = 'white';
    currentWidth = 50;
    erased = true;
})
$('#eraser-xs').on('click', function (e) { //jquery button click code for our eraser button.
    lastColor = currentColor;
    circle = false;
    square = false;
    triangle = false;
    decagon = false;
    currentColor = 'white';
    currentWidth = 5;
    erased = true;
})