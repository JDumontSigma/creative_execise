
var canvasAnimated = document.getElementById('canvasAnimated');
var ctxAnimated = canvasAnimated.getContext('2d');

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
  ctxAnimated.beginPath();
  ctxAnimated.lineWidth = '2';
  ctxAnimated.strokeStyle = '#fff';
  ctxAnimated.moveTo(x,y);
  ctxAnimated.lineTo(x,length);
  ctxAnimated.stroke();
  ctxAnimated.closePath();
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
  ctxAnimated.beginPath();
  ctxAnimated.moveTo(startX,startY);
  ctxAnimated.lineTo(length,startY);
  ctxAnimated.bezierCurveTo(length,startY,firstCurveX,firstCurveY,firstBumpX,firstBumpY);
  ctxAnimated.bezierCurveTo(firstBumpX,firstBumpY,secondCurveX,secondCurveY,secondBumpX,secondBumpY);
  ctxAnimated.bezierCurveTo(secondBumpX,secondBumpY,finalCurveX,finalCurveY,startX,startY);
  ctxAnimated.fillStyle = 'rgba(255,255,255,0.25)';
  ctxAnimated.strokeStyle = 'transparent';
  ctxAnimated.fill();
  ctxAnimated.closePath();
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

  ctxAnimated.beginPath();
  ctxAnimated.moveTo(startX,startY);

  for(var x = 0; x < 3; x++){
    if(x === 0){
      ctxAnimated.lineTo(left,height);
      ctxAnimated.lineTo(right,height);
      ctxAnimated.lineTo(startX,startY);
    }
    if(x === 1){
      left = startX - 30;
      right = startX + 30;
      height = startY + 60;
      beginX = startX - 10;
      beginY = height -30;
      finishX = startX + 10;
      finishY = height - 30;
      ctxAnimated.moveTo(beginX,finishY);
      ctxAnimated.lineTo(left,height);
      ctxAnimated.lineTo(right,height);
      ctxAnimated.lineTo(finishX,finishY);
    }
    if(x === 2){
      left = startX - 40;
      right = startX + 40;
      height = startY + 90;
      beginX = startX - 20;
      beginY = startY + 60;
      finishX = startX + 20;
      finishY = height - 30;
      ctxAnimated.moveTo(beginX,beginY);
      ctxAnimated.lineTo(left,height);
      ctxAnimated.lineTo(right,height);
      ctxAnimated.lineTo(finishX,finishY);
    }
  }
  ctxAnimated.fillStyle = '#000000';
  ctxAnimated.moveTo(startX - 10, height);
  ctxAnimated.fillRect(startX - 10,height,20,20);
  ctxAnimated.fill();
  ctxAnimated.closePath();

  //Highlight!
  ctxAnimated.beginPath();
  ctxAnimated.moveTo(startX,startY);
  ctxAnimated.lineTo(startX - 10, startY + 25);
  ctxAnimated.lineTo(startX,startY + 25);
  ctxAnimated.lineTo(startX - 20, startY + 55);
  ctxAnimated.lineTo(startX - 10, startY + 55);
  ctxAnimated.lineTo(startX - 30,startY + 85);
  ctxAnimated.lineTo(startX,startY + 85);
  ctxAnimated.lineTo(startX, startY + 110);
  ctxAnimated.lineTo(startX - 10, startY + 110);
  ctxAnimated.lineTo(startX - 10, startY + 90);
  ctxAnimated.lineTo(startX - 40,startY + 90);
  ctxAnimated.lineTo(startX - 20, startY + 60);
  ctxAnimated.lineTo(startX - 30, startY + 60);
  ctxAnimated.lineTo(startX - 10, startY + 30);
  ctxAnimated.lineTo(startX - 20, startY + 30);
  ctxAnimated.lineTo(startX,startY);
  ctxAnimated.fillStyle = highlight;
  ctxAnimated.fill();
  ctxAnimated.closePath();

}
/*======================================================================================
Hill Code Here
======================================================================================*/
function hill(startX,startY,bumpX,bumpY,finishX,finishY,color){
  ctxAnimated.beginPath();
  ctxAnimated.moveTo(startX,startY);
  ctxAnimated.bezierCurveTo(startX,startY,bumpX,bumpY,finishX,finishY);
  ctxAnimated.lineTo(startX,finishY);
  ctxAnimated.lineTo(startX,startY);
  ctxAnimated.strokeStyle = color;
  ctxAnimated.fillStyle = color;
  ctxAnimated.fill();
  ctxAnimated.closePath();

}

/*======================================================================================
Sun Code Here
======================================================================================*/
function sun(x,y,size,color){
  ctxAnimated.beginPath();
  ctxAnimated.fillStyle = color;
  ctxAnimated.strokeStyle = 'transparent';
  ctxAnimated.arc(x,y,size,0,2*Math.PI);
  ctxAnimated.fill();
  ctxAnimated.closePath();
}


function background(height, dark,light){
  /*======================================================================================
  Gradient for the background
  ======================================================================================*/
  var my_gradient = ctxAnimated.createLinearGradient(0, height, 0, 0);
  my_gradient.addColorStop(0, dark);
  my_gradient.addColorStop(1, light);
  ctxAnimated.fillStyle = my_gradient;
  ctxAnimated.fillRect(0, 0, 1000, 700);
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
  ctxAnimated.stroke();
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
  ctxAnimated.save();
  ctxAnimated.clearRect(0,0,1000,700);

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
  ctxAnimated.beginPath();
  ctxAnimated.moveTo(0,400);
  ctxAnimated.lineTo(400,400);
  ctxAnimated.bezierCurveTo(400,400,400,440,300,500);
  ctxAnimated.bezierCurveTo(300,500,240,520,280,650);
  ctxAnimated.bezierCurveTo(280,650,290,675,320,700);
  ctxAnimated.lineTo(0,700);
  ctxAnimated.lineTo(0,450);
  ctxAnimated.strokeStyle = '#0d0d0d';
  ctxAnimated.fillStyle = '#0d0d0d';
  ctxAnimated.fill();
  ctxAnimated.closePath();

  /*======================================================================================
  House code goes here
  ======================================================================================*/
  ctxAnimated.beginPath();
  ctxAnimated.moveTo(150,300);
  ctxAnimated.fillRect(150,300,200,100);
  ctxAnimated.moveTo(150,300);
  ctxAnimated.lineTo(130,300);
  ctxAnimated.lineTo(160,250);
  ctxAnimated.lineTo(340,250);
  ctxAnimated.lineTo(370,300);
  ctxAnimated.moveTo(170,220);
  ctxAnimated.fillRect(170,220,20,30);
  ctxAnimated.fillStyle = '#0d0d0d';
  ctxAnimated.fill();
  ctxAnimated.closePath();

  /*======================================================================================
  Smoke Code
  ======================================================================================*/
  ctxAnimated.beginPath();
  ctxAnimated.moveTo(170,220);
  ctxAnimated.quadraticCurveTo(140,200,170,180);
  ctxAnimated.quadraticCurveTo(190,174,220,150);
  ctxAnimated.quadraticCurveTo(300,120,250,180);
  ctxAnimated.quadraticCurveTo(200,190,190,220);
  ctxAnimated.fillStyle = 'rgba(100,100,100,0.25)';
  ctxAnimated.fill();
  ctxAnimated.closePath();

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
  ctxAnimated.stroke();


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







  /*=====================================================
static image
  ======================================================*/
  $(document).ready(function(){
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
  });
