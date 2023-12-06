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

class ColorTriangle extends Triangle {
  constructor(a, b, color) {
    super(a, b); // call parent constructor with super keyword
    this.color = color;
  }
}

class ColorMoodTriangle extends ColorTriangle {
  constructor(a, b, color, mood) {
    super(a, b, color);
    this.mood = mood;
  }
}

const happyTriangle = new ColorMoodTriangle(3, 4, "red", "happy");
console.log(happyTriangle); // ColorMoodTriangle {a: 3, b: 4, color: 'red', mood: 'happy'}
