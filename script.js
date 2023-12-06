const pet = {
  species: "Dog",
  name: "Elton",
  age: 1.5,
};

const key = "species";

console.log(pet["age"]); // 1.5
console.log(pet.age); // 1.5

console.log(pet[key]); // Dog
console.log(pet["species"]); // Dog
console.log(pet.key); // undefined

// All keys get "stringified"
pet[true] = "hello!!!";
console.log(pet["true"]); // hello!!!
console.log(pet[true]); // hello!!!

pet.bark = function () {
  return "WOOF WOOOFF!!";
};
console.log(pet.bark()); // WOOF WOOOFF!!
