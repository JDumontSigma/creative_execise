'use strict';

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

/*======================================================================================
Save the canvas as an image
======================================================================================*/
// FUNCTION FOR DOWNLOADING A CANVAS ELEMENT AS AN IMAGE
function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}

$('#btn-save').click(function( e ){
  console.log('clicked');
  //parameters stand as follow
  //(this, id for the cavas, the name of the file to download)
  downloadCanvas(this, 'canvas', 'Execise 1 - Static');
});

/*======================================================================================
Cloud Code Here
======================================================================================*/
function rain(x,y){
  var length = y + 9;
  ctx.beginPath();
  ctx.lineWidth = '2';
  ctx.strokeStyle = '#fff';
  ctx.moveTo(x,y);
  ctx.lineTo(x,length);
  ctx.stroke();
  ctx.closePath();
}

/*======================================================================================
Cloud Code Here
======================================================================================*/
function cloud(startX,startY){
  var length = startX + 350;

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
  ctx.beginPath();
  ctx.moveTo(startX,startY);
  ctx.lineTo(length,startY);
  ctx.bezierCurveTo(length,startY,firstCurveX,firstCurveY,firstBumpX,firstBumpY);
  ctx.bezierCurveTo(firstBumpX,firstBumpY,secondCurveX,secondCurveY,secondBumpX,secondBumpY);
  ctx.bezierCurveTo(secondBumpX,secondBumpY,finalCurveX,finalCurveY,startX,startY);
  ctx.fillStyle = 'rgba(255,255,255,0.25)';
  ctx.strokeStyle = 'transparent';
  ctx.fill();
  ctx.closePath();
}

/*======================================================================================
Tree Code Here
======================================================================================*/
function tree(startX,startY,highlight){

  var left = startX - 20,
      height = startY + 30,
      right = startX + 20,
      beginX = startX,
      finishX = startX,
      beginY = startX,
      finishY = startX;

  ctx.beginPath();
  ctx.moveTo(startX,startY);

  for(var x = 0; x < 3; x++){
    if(x === 0){
      ctx.lineTo(left,height);
      ctx.lineTo(right,height);
      ctx.lineTo(startX,startY);
    }
    if(x === 1){
      left = startX - 30;
      right = startX + 30;
      height = startY + 60;
      beginX = startX - 10;
      beginY = height -30;
      finishX = startX + 10;
      finishY = height - 30;
      ctx.moveTo(beginX,finishY);
      ctx.lineTo(left,height);
      ctx.lineTo(right,height);
      ctx.lineTo(finishX,finishY);
    }
    if(x === 2){
      left = startX - 40;
      right = startX + 40;
      height = startY + 90;
      beginX = startX - 20;
      beginY = startY + 60;
      finishX = startX + 20;
      finishY = height - 30;
      ctx.moveTo(beginX,beginY);
      ctx.lineTo(left,height);
      ctx.lineTo(right,height);
      ctx.lineTo(finishX,finishY);
    }
  }
  ctx.fillStyle = '#000000';
  ctx.moveTo(startX - 10, height);
  ctx.fillRect(startX - 10,height,20,20);
  ctx.fill();
  ctx.closePath();

  //Highlight!
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
  ctx.fillStyle = highlight;
  ctx.fill();
  ctx.closePath();

}
/*======================================================================================
Hill Code Here
======================================================================================*/
function hill(startX,startY,bumpX,bumpY,finishX,finishY,color){
  ctx.beginPath();
  ctx.moveTo(startX,startY);
  ctx.bezierCurveTo(startX,startY,bumpX,bumpY,finishX,finishY);
  ctx.lineTo(startX,finishY);
  ctx.lineTo(startX,startY);
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();

}

/*======================================================================================
Sun Code Here
======================================================================================*/
function sun(x,y,size,color){
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.strokeStyle = 'transparent';
  ctx.arc(x,y,size,0,2*Math.PI);
  ctx.fill();
  ctx.closePath();
}


function background(height, dark,light){
  /*======================================================================================
  Gradient for the background
  ======================================================================================*/
  var my_gradient = ctx.createLinearGradient(0, height, 0, 0);
  my_gradient.addColorStop(0, dark);
  my_gradient.addColorStop(1, light);
  ctx.fillStyle = my_gradient;
  ctx.fillRect(0, 0, 1000, 700);
}

/*======================================================================================
Draw the rain
======================================================================================*/
//variables to be used with the rain data
//change 100 to either increase of decrease amount of rain
var rainNumber = 100,
    rainData = {},
    activeRain = 0;

function drawRain(){
//if the rain has not be drawn, the create the rain elements
  if(activeRain !== rainNumber){
    //loop through until there are the same amount of elements as rainnumber
    for(var i = 1; i <= rainNumber; i++){
      //generate random variable for x position, y position and the speed of each drop
      var x = Math.floor((Math.random() * 1000) + 1),
          y = Math.floor((Math.random() * 700) + 1),
          speed = Math.floor((Math.random() * 10) + 5) ;
          //set the y postion to negative to prevent flickering in the render
          y = y * -1;
          //set the generated data into the rainData object using i as a key
          rainData[i] = {"x": x, "y": y, "speed" : speed};
          //run the functions using generated data
          rain(x,y);
          //increase the active rain by 1
          activeRain++;
    }
    //if there has been rain elements generated
  }else{
    //loop through all the objects in rainData
    //using the i keys we set previously
    for(var key in rainData){
      //retrieve the speed of the rain
      var move_speed = rainData[key].speed,
          //increase the rains position by its speed
          newY = rainData[key].y + move_speed,
          //get the x value
          currentX = rainData[key].x;
          //if the rain has rached the bottom of the screen
          //perform a reset
          if(newY > 700){
            //place it aboe the canvas again
            newY = -100;
            //generate new speed and x position
            var newX = Math.floor((Math.random() * 1000) + 1),
            newSpeed = Math.floor((Math.random() * 10) + 5);
            //set this information into the variable
            rainData[key].x = newX;
            rainData[key].speed = newSpeed;
          }
      //run the rain generation
      rain(currentX,newY);
      //store the y value depending on the outcome of the if statment
      rainData[key].y = newY;
    }
  }
  //Draw all the elements on the screen
  ctx.stroke();
  //check to see if it is nightime
  //if so loop over the function again
  if(night){
    var looptime = setTimeout(function(){
      drawRain();
    },10);
  }
}

/*======================================================================================


Variables to be used throughout the drawing
these are outside the draw function so they are not set each time it is run
That would be heavy on procession when it come to drawing rain/clouds


======================================================================================*/
//Variables for the clouds
var cloudNumber = 5,
    cloudData = {},
    activeClouds = 0;

//variables about time and the sun
var sunStart = 700,
    night = false,
    size = 350,
    sunColour = '#FDB813';

//sky colours
var orange = '#ef9228',
    darkBlue = '#041c2c';

//gradient variables
var backgroundHeight = 500,
    darkCol = orange,
    lightCol = darkBlue;

//highlight for the trees
var blueHighlight = 'rgba(0,48,135,0.35)',
    orangeHighlight = 'rgba(255,93,0,0.35)' ,
    highlight = orangeHighlight;


/*======================================================================================
Draw function
======================================================================================*/
//This is the function which will clear the canvas and redraw the content each 10ms
function draw(){

  //clear the entire canvas
  ctx.save();
  ctx.clearRect(0,0,1000,700);

  //this is first as it i the piece which is further back
  background(backgroundHeight,darkCol,lightCol);


  /*======================================================================================
  Sun Is called first so it stays at the back
  ======================================================================================*/
  //if the gradient has reached the top
  if(background < 0){
    //set the gradient to the max lenght
    backgroundHeight = 1200;
  }
  //determine whether the sun has risen above everything
    if(night){
      //to not start the rain straight away make sure the background has reached a certain Point
      if(night && backgroundHeight === 1000){
        //start the rain
        drawRain();
      }
      //set the highlight on the trees to blue
      highlight = blueHighlight;
      //set the grdients to a blue
      darkCol = darkBlue;
      //if the sun/moon is further down the canvas
      if(sunStart > -200){
        //make the sun/moon move up the screen
        sunStart--;
        //if the backgrund height on the gradient is great than 0 decrease it so it gets bigger
        if(backgroundHeight >= 0){
          //minus 4 from its current height
          backgroundHeight = backgroundHeight - 4;
        }
        //if it is less that 0 then replace the two colours
        //this emulates sunrise
        if(backgroundHeight < 0){
          lightCol = darkBlue;
          darkCol = orange;
        }
      }
      //if the moon/sun has reached beyond the top of the canvas
      if(sunStart <= -200){
        //set the colour to yellow so it is a sun
        sunColour = '#FDB813';
        //increase the size back up to 350
        size = 350;
        //move it back down the canvase to 800 on the y axis
        sunStart = 800;
        //turn night time off
        night = false;
        //reset the background height of the gradient
        backgroundHeight = 1200;
      }
    }
    //if it is daytime!
    if(!night){
      //set the tree highlights to orange
      highlight = orangeHighlight;
      //the lower colour on the gradient to orange
      darkCol = orange;
      //move the sun up the screen
      sunStart = sunStart - 2;
      //move the orange background over the screen to simulate sunrise
      backgroundHeight = backgroundHeight - 4;
      //if the sun is bigger than 50 wide
      if(size > 50){
        //reduce the size slowly
        size = size - 0.85;
      }
      //if the background height has gone beyond the screen
      if(backgroundHeight < 0){
        //flip the colour
        lightCol = orange;
        darkCol = darkBlue;
      }
      //if the sun has gone off the screen
      if(sunStart < -200){
        //turn it to night time
        night = true;
        //reset the moon position
        sunStart = 600;
        //reduce the size back to 100
        size = 100;
        //change the colour
        sunColour = '#CFCFCF';
        //reset the gradient height
        backgroundHeight = 1200;
      }
    }
//then draw the sun with the variables appropriate
  sun(500,sunStart,size,sunColour);


/*======================================================================================
Draw the clouds
======================================================================================*/
//if there are no clouds generated then draw the clouds
  if(activeClouds !== cloudNumber){
    //loop through this as many time as set
    for(var i = 1; i <= cloudNumber; i++){
      //set random number for the x postiioon and y positiom, speed and a number between 1 and 2 for the direction
      //also variabls to sort out other numbers
      var x = Math.floor((Math.random() * 1000) + 1),
          y = Math.floor((Math.random() * 400) + 1),
          speed = Math.floor((Math.random() * 2) + 1),
          directionChoice = Math.floor((Math.random() * 2) + 1),
          direction;
          //set a string rather than number to direction variables
          if(directionChoice === 1){
            direction = "right";
          }else{
            direction = "left";
          }
          //store all the data into the cloud data object
          cloudData[i] = {"x": x, "y": y, "speed" : speed, "direction":direction};
          //create a cloud using the generated variables
          cloud(x,y);
          //increase the cliud count by 1
          activeClouds++;
    }
    //if there are clouds generated
  }else{
    //loop through all the clouds in the cloud object
    for(var key in cloudData){
      //gater the varirables and store them locally
      var move_speed = cloudData[key].speed,
          newX,
          currentY = cloudData[key].y,
          currentDirection = cloudData[key].direction;
          //depending on the direction set previously add or subtract the speed
          if(currentDirection === "right"){
            newX = cloudData[key].x + move_speed;
          }else{
            newX = cloudData[key].x - move_speed;
          }
          //check to see if the cloud has gone off the screen either side
          if(newX > 1350 || newX < -350){
            //if so generate a new set of information
            var newY = Math.floor((Math.random() * 500) + 1),
            newSpeed = Math.floor((Math.random() * 2) + 1),
            newdirectionChoice = Math.floor((Math.random() * 2) + 1),
            newDirection;
            //depending on the number place the cloud on the opposite end of the canvase
            if(newdirectionChoice === 1){
              newDirection = "right";
              newX = -350;
            }else{
              newDirection = "left";
              newX = 1350;
            }
            //store the new cloud data
            cloudData[key].y = newY;
            cloudData[key].speed = newSpeed;
            cloudData[key].direction = newDirection;
          }
          //draw the clouds
      cloud(newX,currentY);
      //store the new x co ord depending on if statement
      cloudData[key].x = newX;
    }
  }


  /*======================================================================================


  This code is all the same as in Part 1


  ======================================================================================*/


  /*======================================================================================
  Hill from the right
  ======================================================================================*/
  hill(1000,350,200,450,100,700,'#262626');

  /*======================================================================================
  Hill from the left
  ======================================================================================*/
  hill(0,450,500,450,650,700,'#1F1F1F');

  /*======================================================================================
  Cliff Code
  ======================================================================================*/
  ctx.beginPath();
  ctx.moveTo(0,400);
  ctx.lineTo(400,400);
  ctx.bezierCurveTo(400,400,400,440,300,500);
  ctx.bezierCurveTo(300,500,240,520,280,650);
  ctx.bezierCurveTo(280,650,290,675,320,700);
  ctx.lineTo(0,700);
  ctx.lineTo(0,450);
  ctx.strokeStyle = '#0d0d0d';
  ctx.fillStyle = '#0d0d0d';
  ctx.fill();
  ctx.closePath();

  /*======================================================================================
  House code goes here
  ======================================================================================*/
  ctx.beginPath();
  ctx.moveTo(150,300);
  ctx.fillRect(150,300,200,100);
  ctx.moveTo(150,300);
  ctx.lineTo(130,300);
  ctx.lineTo(160,250);
  ctx.lineTo(340,250);
  ctx.lineTo(370,300);
  ctx.moveTo(170,220);
  ctx.fillRect(170,220,20,30);
  ctx.fillStyle = '#0d0d0d';
  ctx.fill();
  ctx.closePath();

  /*======================================================================================
  Smoke Code
  ======================================================================================*/
  ctx.beginPath();
  ctx.moveTo(170,220);
  ctx.quadraticCurveTo(140,200,170,180);
  ctx.quadraticCurveTo(190,174,220,150);
  ctx.quadraticCurveTo(300,120,250,180);
  ctx.quadraticCurveTo(200,190,190,220);
  ctx.fillStyle = 'rgba(100,100,100,0.25)';
  ctx.fill();
  ctx.closePath();

  /*======================================================================================
  Draw All the trees
  ======================================================================================*/
  tree(900,400,highlight);
  tree(750,550,highlight);
  tree(600,340,highlight);
  tree(980,300,highlight);
  tree(680,445,highlight);


  /*======================================================================================
  Draw all the lines which i have planned!
  ======================================================================================*/
  ctx.stroke();


  /*======================================================================================
  Creates a loop for the animations
  ======================================================================================*/
  //Loop over this function every 10ms
  var looptime = setTimeout(function(){
    draw();
  },10);


}

//once the webpage has loaded fully then start the two function
$(document).ready(function(){
  //start the two functions
  draw();
  drawRain();
});
