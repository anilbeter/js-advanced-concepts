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
