// Getters
class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  // Getter for the diameter
  get diameter() {
    return this._radius * 2;
  }

  get radius() {
    console.log(this._radius);
  }
}

const circle = new Circle(5);
console.log(circle.diameter);
// 10
// -> Long story in short -> diameter fonksiyon olmasına rağmen get yazdığım için (getter olduğu için) property gibi davranıyor. Bu yüzden parantez yazıp çağırmama gerek yok, normal string gibi sadece property

circle.radius;
// 5
