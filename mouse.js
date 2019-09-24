console.log("bone.js is live");


class Ball {
  constructor(_xPos, _yPos, _rotation, _size = 1, _colorR, _colorG, _colorB) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.rotation = _rotation;
    this.size = _size;
    this.color1 = _colorR;
    this.color2 = _colorG;
    this.color3 = _colorB;
  }

  display() {
    fill(this.color1, this.color2, this.color3);
    ellipse(this.xPos, this.yPos, this.rotation, this.size);

  }


  move() {
    this.xPos++;
    if (this.xPos == 500) {

      this.xPos = -50;

    }
  }
}