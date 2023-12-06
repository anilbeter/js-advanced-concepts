class Triangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }

  describe() {
    return `I am a triangle with area of ${this.getArea()}`;
  }
}

// child class -> ShyTriangle
// parent class -> Triangle
class ShyTriangle extends Triangle {
  describe() {
    return "(runs and hides)";
  }

  beShy() {
    return "Too shyyyy";
  }
}

const regularTri = new Triangle(5, 12);

const shyTri = new ShyTriangle(3, 4);
console.log(shyTri); // ShyTriangle {a: 3, b: 4}
console.log(shyTri.getArea()); // 6
console.log(shyTri.getHypotenuse()); // 5
console.log(shyTri.describe()); // (runs and hides)
console.log(regularTri.describe()); // I am a triangle with area of 30
// console.log(regularTri.beShy()); // Uncaught TypeError: regularTri.beShy is not a function
console.log(shyTri.beShy()); // Too shyyyy
