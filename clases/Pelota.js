class Pelota {
  constructor() {
    this.posX = random(200, windowWidth - 60);
    this.posY = random(100, 190);
    this.velX = random(-1, 1);
    this.velY = 0;
    this.acelY = random(0.2, 0.98);

    this.diam = int(random(5, 60));
    this.rad = this.diam / 2;
    //noStroke();
    this.colorin = color(random(100, 255), 255, random(0, 150));
    rectMode(CENTER);
    print("Hola estoy vive");
  }

  update(_piso) {
    if (this.posY + this.rad <= _piso) {
      this.velY += this.acelY;
      this.posY += this.velY;
    } else {
      this.velY *= -1;
      this.posY += this.velY;
    }
  }

  display() {
    fill(this.colorin);
    circle(this.posX, this.posY, this.diam);
  }
}
