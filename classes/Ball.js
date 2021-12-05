export default class Ball {

  constructor(elem) {
    this.xVel = 1;
    this.yVel = 0;
    this.elem = elem
  }

  set x(value) {
    this.elem.style.setProperty("--x", value)
  }

  get x() {
    return parseFloat(getComputedStyle(this.elem).getPropertyValue("--x"))
  }

  set x(value) {
    this.elem.style.setProperty("--x", value)
  }

  update(delta) {
    if (this.x > 100 || this.x < 0) {
      this.xVel *= -1
    }
    this.x += this.xVel
  }
}