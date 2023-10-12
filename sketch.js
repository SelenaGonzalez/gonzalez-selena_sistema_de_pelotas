function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(163, 99, 252);
  noStroke();
  let anchura = 20;
  let gap = 50;

  for (let X = 10; X < windowWidth; X += anchura + gap) {
    for (let y = 10; y < windowHeight; y += anchura + gap) {
      square(X, y, anchura);
    }
  }
}
