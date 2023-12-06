class Triangle {
  constructor(a, b) {
    if (!Number.isFinite(a) || a <= 0) throw new Error(`Invalid a: ${a}`);

    if (!Number.isFinite(b) || b <= 0) throw new Error(`Invalid b: ${b}`);

    this.a = a;
    this.b = b;
  }
  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }

  triAngleDescription() {
    return `This triangle do have ${this.getArea()} br^2 area, and hypotenuse is ${this.getHypotenuse()} br`;
  }
}

const firstTriAngle = new Triangle(3, 4);
console.log(firstTriAngle.triAngleDescription()); // This triangle do have 6, and hypotenuse is 5
