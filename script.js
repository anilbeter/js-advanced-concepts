class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  // static property -> individiual pieces of data are on the class, NOT on instances.
  static species = "felis catus";
}

const ocean = new Cat("ocean", "yellow");
console.log(ocean); // Cat {name: 'ocean', breed: 'yellow'}

console.log(Cat.species); // felis catus
console.log(ocean.species); // undefined

// Also, I can change the static properties from outside the class
Cat.species = "HATE";
console.log(Cat.species); // HATE
