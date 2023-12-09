// Static methods
// ->method is called on a Class, not an object -therefore it cannot have access to individual object attributes

class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  static meow() {
    return "MEOW MEOW MEOW!!";
  }
}

const blue = new Cat("blue", "scottish");
console.log(Cat.meow()); // MEOW MEOW MEOW!!
// console.log(blue.meow());
// script.js:17 Uncaught TypeError: blue.meow is not a function
