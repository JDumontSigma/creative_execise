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
Draw function
======================================================================================*/
var cloudNumber = 4,
    cloudData = {},
    activeClouds = 0;

var sunStart = 700,
    night = false,
    size = 350,
    sunColour = '#FDB813';

var red = '#cc0e0e',
    orange = '#ef9228',
    blue = '#003087',
    darkBlue = '#041c2c',
    shade = true;

var backgroundHeight = 500,
    darkCol = orange,
    lightCol = darkBlue;

var blueHighlight = 'rgba(0,48,135,0.35)',
    orangeHighlight = 'rgba(255,93,0,0.35)' ,
    highlight = orangeHighlight;


function draw(){

  //clear the entire canvase
  ctx.save();
  ctx.clearRect(0,0,1000,700);


  background(backgroundHeight,darkCol,lightCol);


  /*======================================================================================
  Sun Is called first so it stays at the back
  ======================================================================================*/
  if(background < 0){
    backgroundHeight = 700;
  }
    if(night){
      highlight = blueHighlight;
      darkCol = darkBlue;
      if(sunStart > -200){
        sunStart--;
        if(backgroundHeight >= 0){
          backgroundHeight = backgroundHeight - 4;
        }
        if(backgroundHeight < 0){
          lightCol = darkBlue;
          darkCol = orange;
        }
      }
      if(sunStart <= -200){
        sunColour = '#FDB813';
        size = 350;
        sunStart = 800;
        night = false;
        backgroundHeight = 1200;
      }
    }
    if(!night){
      highlight = orangeHighlight;
      darkCol = orange;
      sunStart = sunStart - 2;
      backgroundHeight = backgroundHeight - 4;
      if(size > 50){
        size = size - 0.85;
      }
      if(backgroundHeight < 0){
        lightCol = orange;
        darkCol = darkBlue;
      }
      if(sunStart < -200){
        night = true;
        sunStart = 600;
        size = 100;
        sunColour = '#CFCFCF';
        backgroundHeight = 1200;
      }
    }
  sun(500,sunStart,size,sunColour);


  /*======================================================================================
  Draw the clouds
  ======================================================================================*/
  if(activeClouds !== cloudNumber){
    for(var i = 1; i <= cloudNumber; i++){
      var x = Math.floor((Math.random() * 1000) + 1),
          y = Math.floor((Math.random() * 400) + 1),
          speed = Math.floor((Math.random() * 2) + 1),
          directionChoice = Math.floor((Math.random() * 2) + 1),
          direction;
          if(directionChoice === 1){
            direction = "right";
          }else{
            direction = "left";
          }
          cloudData[i] = {"x": x, "y": y, "speed" : speed, "direction":direction};
          cloud(x,y);
          activeClouds++;
    }
  }else{
    for(var key in cloudData){
      var move_speed = cloudData[key].speed,
          newX,
          currentY = cloudData[key].y,
          currentDirection = cloudData[key].direction;

          if(currentDirection === "right"){
            newX = cloudData[key].x + move_speed;
          }else{
            newX = cloudData[key].x - move_speed;
          }

          if(newX > 1350 || newX < -350){
            var newY = Math.floor((Math.random() * 500) + 1),
            newSpeed = Math.floor((Math.random() * 2) + 1),
            newdirectionChoice = Math.floor((Math.random() * 2) + 1),
            newDirection;
            if(newdirectionChoice === 1){
              newDirection = "right";
              newX = -350;
            }else{
              newDirection = "left";
              newX = 1350;
            }
            cloudData[key].y = newY;
            cloudData[key].speed = newSpeed;
            cloudData[key].direction = newDirection;
          }
      cloud(newX,currentY);
      cloudData[key].x = newX;
    }
  }






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
  var looptime = setTimeout(function(){
    draw();
  },30);
}


$(document).ready(function(){
  draw();
});
