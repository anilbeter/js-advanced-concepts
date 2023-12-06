// Area of right triangle
function getTriangleArea(a, b) {
  return (a * b) / 2;
}

// Hypotenuse of right triangle
const getTriangleHypotenuse = (a, b) => Math.sqrt(a ** 2 + b ** 2);

// Combine them in an object
let myTri = {
  a: 3,
  b: 4,

  getArea() {
    return (this.a * this.b) / 2;
  },

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  },
};

console.log(myTri.getHypotenuse()); // 5
// It works end of the day but If I had 10.000 triangles it wouldn't work at all. Do I have to write bunch of myTri, myTri1, myTri2, ... myTri1000 ? lol, HELL NOOOO. So solution is just there, Classes.

class Triangle {
  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
  // this keyword'u classın kendisi olan Triangle'ı işaret etmiyor. Yaratacağım her örneğin kendisini işaret ediyor.
}

const firstTriangle = new Triangle();
// this -> firstTriangle
firstTriangle.a = 3;
firstTriangle.b = 4;
console.log(firstTriangle.getHypotenuse()); // 5

const secondTriangle = new Triangle();
// this -> secondTriangle
secondTriangle.a = 8;
secondTriangle.b = 15;
console.log(secondTriangle.getHypotenuse()); // 17

console.log(typeof secondTriangle); // object
console.log(firstTriangle instanceof Triangle); // true
