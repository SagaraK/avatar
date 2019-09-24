let mic;
let micLevel;
let eyeSize = 30;
let pupilSize = 5;
let mouse1;
let overEye = false;

function setup() {
  createCanvas(400, 400);
  background(200, 200, 100);

  mouse1 = new Ball(100, 350, 50, 10, 20, 50, 178);
  mic = new p5.AudioIn();
  mic.start();

}

function draw() {
  background(200, 200, 100);
  ears();
  tail();
  body();
  head();
  eyes(eyeSize);
  eyesPupil(pupilSize);

  feet();
  nose();



  //micLevel = mic.getLevel();
  //console.log('miclevel' + mic.getLevel());
  // eyes(micLevel * 50);
  pet();

  overEyes();

  mouse1.display();
  mouse1.move();

}


function head() {
  fill(200);
  circle(width / 2, height / 3.5, 110);
}

function eyesPupil(varSize) {
  fill(20);
  circle(width / 2 - 25, height / 2 - 100, varSize);
  circle(width / 2 + 25, height / 2 - 100, varSize);

}

function eyes(varSize) {
  fill(255);
  circle(width / 2 - 25, height / 2 - 100, varSize);
  circle(width / 2 + 25, height / 2 - 100, varSize);

}

function ears() {
  fill(200);
  triangle(width * 0.375, height * .25, width * .4, height * .08, width * .46, height * .16);
  triangle(width * .5, height * .25, width * .57, height * .075, width * .62, height * .22);
}

function body() {
  fill(200);
  ellipse(width / 2, height / 2 + 40, 125, 250);
}

function feet() {
  fill(200);
  arc(165, height / 2 + 175, 50, 50, 16, 6, CHORD);
  arc(235, height / 2 + 175, 50, 50, 16, 6, CHORD);

}


function nose() {
  fill(255, 100, 100);
  beginShape();
  vertex(width / 2, height / 2 - 65);
  vertex(width / 2 + 10, height / 2 - 75);
  vertex(width / 2 - 10, height / 2 - 75);
  vertex(width / 2, height / 2 - 65);
  endShape();
}

function tail() {
  fill(200);
  if (mouseX >= width / 2 && mouseY >= height / 2) {
    beginShape();
    curveVertex(width / 2 + 5, height / 2 + 165);
    curveVertex(width / 2 + 5, height / 2 + 165);
    curveVertex(mouseX * .65, mouseY * .8);
    curveVertex(mouseX * .72, mouseY * .73);
    curveVertex(mouseX * .74, mouseY * .6);
    curveVertex(mouseX * .7, mouseY * .55);
    curveVertex(mouseX * .68, mouseY * .6);
    curveVertex(mouseX * .65, mouseY * .73);
    curveVertex(mouseX * .6, mouseY * .8);
    curveVertex(width / 2, height / 2 + 160);
    curveVertex(width / 2, height / 2 + 160);
    endShape();
  } else {
    fill(200);
    beginShape();
    curveVertex(width / 2 + 5, height / 2 + 165);
    curveVertex(width / 2 + 5, height / 2 + 165);
    curveVertex(width * .65, height * .8);
    curveVertex(width * .72, height * .73);
    curveVertex(width * .74, height * .6);
    curveVertex(width * .7, height * .55);
    curveVertex(width * .68, height * .6);
    curveVertex(width * .65, height * .73);
    curveVertex(width * .6, height * .8);
    curveVertex(width / 2, height / 2 + 160);
    curveVertex(width / 2, height / 2 + 160);
    endShape();

  }
}
/*function tail() {

  fill(200);
  beginShape();
  curveVertex(width / 2 + 5, height / 2 + 165);
  curveVertex(width / 2 + 5, height / 2 + 165);
  curveVertex(width * .65, height * .8);
  curveVertex(width * .72, height * .73);
  curveVertex(width * .74, height * .6);
  curveVertex(width * .7, height * .55);
  curveVertex(width * .68, height * .6);
  curveVertex(width * .65, height * .73);
  curveVertex(width * .6, height * .8);
  curveVertex(width / 2, height / 2 + 160);
  curveVertex(width / 2, height / 2 + 160);
  endShape();


}
*/



function pet() {
  if (mouseX >= (width / 2) - 55 && mouseX <= (width / 2) + 55 && mouseY >= (height / 3.5) - 55 && mouseY <= (height / 3.5) + 55) {
    fill(255, 255, 255);
    circle(width / 2, height / 3.5, 110);
    eyes(eyeSize);
    eyesPupil(pupilSize);
    //eyes(micLevel * 50);
    nose();
    //console.log("in here");
  } else {
    //console.log("outta here");
    fill(200);
    circle(width / 2, height / 3.5, 110);
    eyes(eyeSize);
    eyesPupil(pupilSize);
    //eyes(micLevel * 50);
    nose();

  }
}


function overEyes() {
  if (mouseX >= (width / 2 - 25) - 7.5 && mouseX <= (width / 2 - 25) + 7.5 && mouseY >= (height / 2 - 100) - 7.5 && mouseY <= (height / 2 - 100) + 7.5) {
    fill(200, 60, 20);
    circle(width / 2 - 25, height / 2 - 100, eyeSize);

  } else if (mouseX >= (width / 2 + 25) - 7.5 && mouseX <= (width / 2 + 25) + 7.5 && mouseY >= (height / 2 - 100) - 7.5 && mouseY <= (height / 2 - 100) + 7.5) {
    fill(200, 60, 20);
    circle(width / 2 + 25, height / 2 - 100, eyeSize);
  }




}