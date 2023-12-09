// Example 1
class MyMath {
  static add(a, b) {
    return a + b;
  }
  static multipy(a, b) {
    return a * b;
  }
}
console.log(MyMath.add(2, 3)); // 5
console.log(MyMath.multipy(5, 2)); // 10

// Example 2
class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  meow() {
    return `${this.name} says meow`;
  }

  static registerStray() {
    const names = [
      "Muffin",
      "Biscuits",
      "Sleepy",
      "Dodo",
      "Princess Butterface",
    ];
    const name = choice(names);
    return new Cat(name, "unknown");
  }
}

function choice(arr) {
  const randIdx = Math.floor(Math.random() * arr.length);
  return arr[randIdx];
}

// Kedi isimlerinden rastgele birini seçip yeni bi instantiate oluşturucak
console.log(Cat.registerStray()); // Cat {name: 'Muffin', breed: 'unknown'}
