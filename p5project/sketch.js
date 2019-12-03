var size = 50;
var begining = 180;
var space = 100;
var placement = 230;
function setup() {
createCanvas(500,500);  // put setup code here
}

function draw() {
  //red, green, blue, 0-255
   background(50, 20, 65);// put drawing code here
   //random//


fill (250);
   ellipse (mouseX, mouseY, 45, 45);







strokeWeight(4);
stroke(0,0,0);

fill (250, 0, 0);
textSize(56);
textFont();
text("Hold Button",102,58);




//console.log(2+7)


fill(75,65,85);
rect(placement, placement, size, size);

if (mouseIsPressed) {
    size = size +10;
    placement = placement +5;
    //fill (random(0,255), random(0,255), random(0,255);
  } else {
    size = 65;
    placement = 30;}

  }
