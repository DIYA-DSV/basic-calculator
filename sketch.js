function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  strokeWeight(5);
  stroke(255);


  let h = windowHeight;
  let w = windowWidth;
  let w1 = w/2.5;
  let w2 = w/10;
  let h1 = h/7.5;
  let h2 = h/13;

  // WHITE BUTTON 0
  if (mouseIsPressed && (mouseX > 0 && mouseX < w/5 && mouseY > h1*6.6 && mouseY < h)) {
      fill(255);
    } else {
      fill(0);
    }
  strokeWeight(0);
  rect(0, h1*6.6, w/5, h);

  // WHITE BUTTON =
  if (mouseIsPressed && (mouseX > w2*2 && mouseX < w/2.5 && mouseY > h1*6.6 && mouseY < h)) {
      fill(255);
    } else {
      fill(0);
    }
  strokeWeight(0);
  rect(w2*2, h1*6.6, w/5, h);

  // WHITE BUTTON 1
  if (mouseIsPressed && (mouseX > 0 && mouseX < w2 && mouseY > h1*5.6 && mouseY < h1*6.6)) {
      fill(255);
    } else {
      fill(0);
    }
  strokeWeight(0);
  rect(0, h1*5.6, w2, h1);

  // WHITE BUTTON 2
  if (mouseIsPressed && (mouseX > w2 && mouseX < w2*2 && mouseY > h1*5.6 && mouseY < h1*6.6)) {
      fill(255);
    } else {
      fill(0);
    }
  strokeWeight(0);
  rect(w2, h1*5.6, w2, h1);

  // WHITE BUTTON 3
  if (mouseIsPressed && (mouseX > w2*2 && mouseX < w2*3 && mouseY > h1*5.6 && mouseY < h1*6.6)) {
      fill(255);
    } else {
      fill(0);
    }
  strokeWeight(0);
  rect(w2*2, h1*5.6, w2, h1);

  // WHITE BUTTON +
  if (mouseIsPressed && (mouseX > w2*3 && mouseX < w2*4 && mouseY > h1*5.6 && mouseY < h1*6.6)) {
      fill(255);
    } else {
      fill(0);
    }
  strokeWeight(0);
  rect(w2*3, h1*5.6, w2, h1);

  // WHITE BUTTON 4
  if (mouseIsPressed && (mouseX > 0 && mouseX < w2 && mouseY > h1*4.6 && mouseY < h1*5.6)) {
      fill(255);
    } else {
      fill(0);
    }
  strokeWeight(0);
  rect(0, h1*4.6, w2, h1);

  // WHITE BUTTON 5
  if (mouseIsPressed && (mouseX > w2 && mouseX < w2*2 && mouseY > h1*4.6 && mouseY < h1*5.6)) {
      fill(255);
    } else {
      fill(0);
    }
  strokeWeight(0);
  rect(w2, h1*4.6, w2, h1);

  // WHITE BUTTON 6
  if (mouseIsPressed && (mouseX > w2*2 && mouseX < w2*3 && mouseY > h1*4.6 && mouseY < h1*5.6)) {
      fill(255);
    } else {
      fill(0);
    }
    strokeWeight(0);
    rect(w2*3, h1*4.6, w2, h1);

    // WHITE BUTTON 7
    if (mouseIsPressed && (mouseX > 0 && mouseX < w2 && mouseY > h1*3.6 && mouseY < h1*4.6)) {
        fill(255);
      } else {
        fill(0);
      }
    strokeWeight(0);
    rect(0, h1*3.6, w2, h1);

    // WHITE BUTTON 8
    if (mouseIsPressed && (mouseX > w2 && mouseX < w2*2 && mouseY > h1*3.6 && mouseY < h1*4.6)) {
        fill(255);
      } else {
        fill(0);
      }
    strokeWeight(0);
    rect(w2, h1*3.6, w2, h1);

    // WHITE BUTTON 9
    if (mouseIsPressed && (mouseX > w2*2 && mouseX < w2*3 && mouseY > h1*3.6 && mouseY < h1*4.6)) {
        fill(255);
      } else {
        fill(0);
      }
    strokeWeight(0);
    rect(w2*2, h1*3.6, w2, h1);

    // WHITE BUTTON x
    if (mouseIsPressed && (mouseX > w2*3 && mouseX < w2*4 && mouseY > h1*3.6 && mouseY < h1*4.6)) {
        fill(255);
      } else {
        fill(0);
      }
    strokeWeight(0);
    rect(w2*3, h1*3.6, w2, h1);

    // WHITE BUTTON AC
    if (mouseIsPressed && (mouseX > 0 && mouseX < w2*3 && mouseY > h1*2.6 && mouseY < h1*3.6)) {
        fill(255);
      } else {
        fill(0);
      }
    strokeWeight(0);
    rect(0, h1*2.6, w2*3, h1);

    // WHITE BUTTON //
    if (mouseIsPressed && (mouseX > w2*3 && mouseX < w2*4 && mouseY > h1*2.6 && mouseY < h1*3.6)) {
        fill(255);
      } else {
        fill(0);
      }
    strokeWeight(0);
    rect(w2*3, h1*2.6, w2, h1);



    strokeWeight(5);
    stroke(255);

    line(0, h/6, w, h/6);
    line(w1, h/6 + 1, w1, h);
    line(w/1.5, h/6 + 1, w/1.5, h);
    line(w/1.5, h/1.25, w, h/1.25);
    line(0, h1*2 + h2, w1, h1*2 + h2);
    line(0, h1*3 + h2, w1, h1*3 + h2);
    line(0, h1*4 + h2, w1, h1*4 + h2);
    line(0, h1*5 + h2, w1, h1*5 + h2);
    line(0, h1*6 + h2, w1, h1*6 + h2);
    line(w2, (h1*3) + h2, w2, h1*6 + h2);
    line(w2*2, (h1*3) + h2, w2*2, h);
    line(w2*3, (h1*2) + h2, w2*3, h1*6 + h2);
    strokeWeight(0);

    fill(255);
    textSize(w/30);
    textFont('Helvetica Bold')
    text('CALCULATOR', (windowWidth/2) - (windowWidth/10), h/12);

    textSize(w/20)
    text('=', w2*2.85, h1*7.25);
    textSize(w/30)
    text('0', w2*0.9, h1*7.25);
    text('1', w2*0.35, h1*6.25);
    text('2', w2*1.4, h1*6.25);
    text('3', w2*2.4, h1*6.25);
    text('4', w2*0.35, h1*5.25);
    text('5', w2*1.4, h1*5.25);
    text('6', w2*2.4, h1*5.25);
    text('7', w2*0.35, h1*4.25);
    text('8', w2*1.4, h1*4.25);
    text('9', w2*2.4, h1*4.25);
    text('AC', w2*0.2, h1*3.25);
    text('\xF7', w2*3.4, h1*3.25);
    text('\xD7', w2*3.4, h1*4.25);
    text('-', w2*3.425, h1*5.25);
    text('+', w2*3.4, h1*6.25);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
