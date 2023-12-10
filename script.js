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

// ArrayUtils exercise
/*
Implement a class named ArrayUtils that cannot be instantiated and contains static methods average and max. If the class is instantiated throw an error with the message 'ArrayUtils cannot be instantiated.'



The average method should return the average of an array of numbers. If the array is empty, throw an error with the message 'Array cannot be empty.'



The max method should return the largest number from an array of numbers. You can assume you will always get passed an arrray of numbers
*/
class ArrayUtils {
  constructor() {
    throw new Error("ArrayUtils cannot be instantiated.");
  }
  static average(arr) {
    let x = 0;
    if (arr.length === 0) throw new Error("Array cannot be empty.");
    return arr.reduce((sum, num) => sum + num, 0) / arr.length;
  }

  static max(arr) {
    return Math.max(...arr);
  }
}
