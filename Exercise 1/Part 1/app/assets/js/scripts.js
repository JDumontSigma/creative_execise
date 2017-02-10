'use strict';
//Retrieve our canvas elements from the HTML
var canvas = document.getElementById('canvas');
//create a variable which will allow us to draw onto the canvas
//ctx seems to be the most common usage
var ctx = canvas.getContext('2d');

/*======================================================================================
Save the canvas as an image
EXTRA WORK!!!!!
Not necessary for the assignment however still commented up!
======================================================================================*/
// FUNCTION FOR DOWNLOADING A CANVAS ELEMENT AS AN IMAGE
function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}

$('#btn-save').click(function(e){
  console.log('clicked');
  //parameters stand as follow
  //(this, id for the cavas, the name of the file to download)
  downloadCanvas(this, 'canvas', 'Execise 1 - Static');
});


/*======================================================================================


These functions will be called further on in the code, they are at the top of the page
for good Javascript practices of defining functions before calling them


======================================================================================*/



/*======================================================================================
Cloud Code Here
======================================================================================*/
//Function to create clouds which will produce the same output in various positions
//Pass in two parameters, the starting X and Y co-ordinates
function cloud(startX,startY){
  //Set variables to be called when drawing the clouds
  //length will be used to draw the straight line across the bottom
  var length = startX + 350;
  //these will be used to generate the bumps starting from right to left
  var firstBumpX = startX + 250,
      firstBumpY = startY - 40,
      firstCurveX = startX + 320,
      firstCurveY = startY - 80;
  var secondBumpX = startX + 120,
      secondBumpY = startY - 40,
      secondCurveX = startX + 200,
      secondCurveY = startY - 120;
  var finalCurveX = startX + 20,
      finalCurveY = startY - 40;

  //create a path
  ctx.beginPath();
  //move to the starting x and y point
  //set by the parameters
  ctx.moveTo(startX,startY);
  //draw the straight line across the bottom
  ctx.lineTo(length,startY);
  //create the bump across the cloud
  //bezier curves work in the fashoin
  //(startingX,startingY,Curve relationalX,Curve relationY, endX, endY)
  ctx.bezierCurveTo(length,startY,firstCurveX,firstCurveY,firstBumpX,firstBumpY);
  ctx.bezierCurveTo(firstBumpX,firstBumpY,secondCurveX,secondCurveY,secondBumpX,secondBumpY);
  ctx.bezierCurveTo(secondBumpX,secondBumpY,finalCurveX,finalCurveY,startX,startY);
  //set the fill style to 25% opacity and white
  ctx.fillStyle = 'rgba(255,255,255,0.25)';
  //remove the stroke from the cloud by setting it to transparent
  ctx.strokeStyle = 'transparent';
  //fill in the shape with the set colours
  ctx.fill();
  //close the path so we can open another
  ctx.closePath();
}

/*======================================================================================
Tree Code Here
======================================================================================*/
//Function to create tree which will produce the same output in various positions
//Pass in two parameters, the starting X and Y co-ordinates
function tree(startX,startY){
  //Create the base variable which will be manipulated throughout this process
  var left = startX - 20,
      height = startY + 30,
      right = startX + 20,
      beginX = startX,
      finishX = startX,
      beginY = startX,
      finishY = startX;
      //create a new path to draw the shape
  ctx.beginPath();
  //move to the starting co ordinated
  ctx.moveTo(startX,startY);
  //begin a loop which will loop 3 times to create the 3 triangles
  for(var x = 0; x < 3; x++){
    //produces the top triangle
    if(x === 0){
      ctx.lineTo(left,height);
      ctx.lineTo(right,height);
      ctx.lineTo(startX,startY);
    }
    if(x === 1){
      //readjust the setting to be suitable for the next traingle
      left = startX - 30;
      right = startX + 30;
      height = startY + 60;
      beginX = startX - 10;
      beginY = height -30;
      finishX = startX + 10;
      finishY = height - 30;
      //move to the base of the top triangle a draw the second part of the tree
      ctx.moveTo(beginX,finishY);
      ctx.lineTo(left,height);
      ctx.lineTo(right,height);
      ctx.lineTo(finishX,finishY);
    }
    if(x === 2){
      //readjust the setting to be suitable for the next traingle
      left = startX - 40;
      right = startX + 40;
      height = startY + 90;
      beginX = startX - 20;
      beginY = startY + 60;
      finishX = startX + 20;
      finishY = height - 30;
        //move to the base of the top triangle a draw the second part of the tree
      ctx.moveTo(beginX,beginY);
      ctx.lineTo(left,height);
      ctx.lineTo(right,height);
      ctx.lineTo(finishX,finishY);
    }
  }
  //Set the fill style to black
  ctx.fillStyle = '#000';
  //move to just off center of the third traingle
  ctx.moveTo(startX - 10, height);
  //draw a rectangle as the stump of the tree
  ctx.fillRect(startX - 10,height,20,20);
  //fill in the tree fully in black
  ctx.fill();
  //close off the path ready for highlighting
  ctx.closePath();

  //Highlight!
  //go back other the element but not always going to the edge of the tree to create a highlight
  ctx.beginPath();
  ctx.moveTo(startX,startY);
  ctx.lineTo(startX - 10, startY + 25);
  ctx.lineTo(startX,startY + 25);
  ctx.lineTo(startX - 20, startY + 55);
  ctx.lineTo(startX - 10, startY + 55);
  ctx.lineTo(startX - 30,startY + 85);
  ctx.lineTo(startX,startY + 85);
  ctx.lineTo(startX, startY + 110);
  ctx.lineTo(startX - 10, startY + 110);
  ctx.lineTo(startX - 10, startY + 90);
  ctx.lineTo(startX - 40,startY + 90);
  ctx.lineTo(startX - 20, startY + 60);
  ctx.lineTo(startX - 30, startY + 60);
  ctx.lineTo(startX - 10, startY + 30);
  ctx.lineTo(startX - 20, startY + 30);
  ctx.lineTo(startX,startY);
  //Change the fill style to a 35% opacity orange to fir in with the sunset
  ctx.fillStyle = 'rgba(255,93,0,0.35)';
  //fill the highlight
  ctx.fill();
  //close the path
  ctx.closePath();

}

/*======================================================================================
Hill Code Here
======================================================================================*/
//Create a function to draw hills using bezier curves
//this requires start coords, point of curve cood, finish coord and color
function hill(startX,startY,bumpX,bumpY,finishX,finishY,color){
  //start the path
  ctx.beginPath();
  //move to the starting coords
  ctx.moveTo(startX,startY);
  //create the curve
  ctx.bezierCurveTo(startX,startY,bumpX,bumpY,finishX,finishY);
  //create a line to the Y co ord to start closing the shape
  ctx.lineTo(startX,finishY);
  //return back to the starting point providing solid shape
  ctx.lineTo(startX,startY);
  //set the colour to the specific colour
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  //fill in the shape
  ctx.fill();
  //close the path
  ctx.closePath();
}

/*======================================================================================
Sun Code Here
======================================================================================*/
//code to create a sun
//takes in the x and y co ords and the size
function sun(x,y,size){
  //begin the drawing path
  ctx.beginPath();
  //set the fill style to a yellow
  ctx.fillStyle = '#FDB813';
  //remove the stroke by setting it to transparent
  ctx.strokeStyle = 'transparent';
  //create setting the location, size and rotation
  ctx.arc(x,y,size,0,2*Math.PI);
  //fill in this shape with earlier settings
  ctx.fill();
  //close the path
  ctx.closePath();
}


/*======================================================================================


This is where I start calling the functions I have defined previous along with some written code
This is based on the stacking order on canvas, hence there is a mix of function callas
along with new elements which only needed to be created once


======================================================================================*/


/*======================================================================================
Gradient for the background
======================================================================================*/
//Create a linear gradient, set the proportions with numbers
//left, top, right, bottom
var my_gradient = ctx.createLinearGradient(0, 500, 0, 0);
//set colour stops, how far along they go and there colour
my_gradient.addColorStop(0, "#cc0e0e");
my_gradient.addColorStop(1, "#ef9228");
//set the fill style to this gradient
ctx.fillStyle = my_gradient;
//fill the entire rectangle with the gradient
ctx.fillRect(0, 0, 1000, 700);

/*======================================================================================
Sun Is called first so it stays at the back
======================================================================================*/
//generate a sun half way across the screen on the bottom with a 350 radius
sun(500,700,350);

/*======================================================================================
Hill from the right
======================================================================================*/
//create a hill and set the colour
hill(1000,350,200,450,100,700,'#262626');

/*======================================================================================
Hill from the left
======================================================================================*/
//create another hill and set the colour to slightly darker
hill(0,450,500,450,650,700,'#1F1F1F');

/*======================================================================================
Cliff Code
======================================================================================*/
//Begin a new path to create the cliff
ctx.beginPath();
//move to the far left hand side
ctx.moveTo(0,400);
//draw the flat edge
ctx.lineTo(400,400);
//create the lumps on the cliff side
ctx.bezierCurveTo(400,400,400,440,300,500);
ctx.bezierCurveTo(300,500,240,520,280,650);
ctx.bezierCurveTo(280,650,290,675,320,700);
//connect the lines up
ctx.lineTo(0,700);
ctx.lineTo(0,450);
//set the stroke and fill to just off black
ctx.strokeStyle = '#0d0d0d';
ctx.fillStyle = '#0d0d0d';
//fill in the cliff
ctx.fill();
//close the path
ctx.closePath();

/*======================================================================================
House code goes here
======================================================================================*/
//create a new path
ctx.beginPath();
//move to a point along the cliff top
ctx.moveTo(150,300);
//create a rectangle for the main part of the house
ctx.fillRect(150,300,200,100);
//move to the top left hand corner of the house
ctx.moveTo(150,300);
//draw a slanted roof
ctx.lineTo(130,300);
ctx.lineTo(160,250);
ctx.lineTo(340,250);
ctx.lineTo(370,300);
//move to above the slanted roof
ctx.moveTo(170,220);
//create a rectangle to demonstrate a chimney
ctx.fillRect(170,220,20,30);
//set the fill colour to the same as the cliff
ctx.fillStyle = '#0d0d0d';
//fill in the shapes
ctx.fill();
//close the path off
ctx.closePath();

/*======================================================================================
Smoke Code
======================================================================================*/
//create a new path
ctx.beginPath();
//move to the top left part of the chimney
ctx.moveTo(170,220);
//use quaratic curves to generate Smoke
//Quadratric curves work similar to bexier curves just assume 2 parameters instad
//Quadratic parameters go (Point of refernce X, point of referece Y, finish x , finish y)
//They assume where you are is the start thus missing out the first two parameters from bezier
ctx.quadraticCurveTo(140,200,170,180);
ctx.quadraticCurveTo(190,174,220,150);
ctx.quadraticCurveTo(300,120,250,180);
ctx.quadraticCurveTo(200,190,190,220);
//set the colour to 25% grey
ctx.fillStyle = 'rgba(100,100,100,0.25)';
//fill in the shape
ctx.fill();
//close the path
ctx.closePath();

/*======================================================================================
Draw All the trees
======================================================================================*/
tree(900,400);
tree(750,550);
tree(600,340);
tree(980,300);
tree(680,445);

/*======================================================================================
Draw the clouds
======================================================================================*/
cloud(500,180);
cloud(20,100);
cloud(800,40);

/*======================================================================================
Draw all the lines which i have planned!
======================================================================================*/
ctx.stroke();
