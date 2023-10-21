pelotas = [];
const NP = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < NP; i++) {
    let pelota = new Pelota();
    pelotas.push(pelota);
  }
  print(pelotas);
}

function draw() {
  background(200, 50, 100);
  for (let i = 0; i < NP; i++) {
    pelotas[i].update(windowHeight);
    pelotas[i].display();
  }
}
