function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  background(40);
  frameRate(40);

}

function draw() {
  
  //variabili
  var angle = sin(frameCount) * 180;
  var angle2 = sin(frameCount * 2) * 180;
  
  //trasformazioni
  translate(width / 2, height / 2);
  rotate(frameCount);

  //colore
  stroke(lerpColor(color('#ff003d'), color('#fff'), frameCount / 180));

  //cerchi
  line(0, 0, 0, angle);
  line(0, 0, 0, -angle);
  line(0, 0, angle, 0);
  line(0, 0, -angle, 0);

  //colore2
  fill(lerpColor(color('#ff003d'), color('#fff'), frameCount / 180));
  
  //centro
  ellipse(10, 10, 10, 10)
  ellipse(10, -10, 10, 10)
  ellipse(-10, 10, 10, 10)
  ellipse(-10, -10, 10, 10)

  ellipse(20, 20, 10, 10)
  ellipse(-20, 20, 10, 10)
  ellipse(-20, -20, 10, 10)
  ellipse(20, -20, 10, 10)

  //colore3
  stroke(lerpColor(color('#fff'), color('#ff003d'), frameCount / 180));
  
  //petali
  line(0, 0, 0, angle2);
  line(0, 0, 0, -angle2);

  //stop
  if (frameCount == 180) {
    noLoop();
  }


}