// Setters

class Circle {
  static allowedColors = new Set(["red", "green", "blue"]);
  constructor(radius, color) {
    this._radius = radius;
    this._color = color;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (value < 0) {
      throw new Error("Radius cannot be negative!");
    } else {
      this._radius = value;
    }
  }

  get color() {
    return this._color;
  }

  set color(newColor) {
    if (allowedColors.has(newColor)) {
      this._color = newColor;
    } else {
      throw new Error("That color is not allowed!");
    }
  }
}

const circle = new Circle(5, "red");
// circle.radius = -3;
// Uncaught Error: Radius cannot be negative!
console.log(circle.color); // red
circle.color = "black"; // script.js:30 Uncaught Error: That color is not allowed!
