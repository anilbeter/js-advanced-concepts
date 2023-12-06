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
  constructor(a, b) {
    if (!Number.isFinite(a) || a <= 0) throw new Error(`Invalid a: ${a}`);

    if (!Number.isFinite(b) || b <= 0) throw new Error(`Invalid b: ${b}`);

    this.a = a;
    this.b = b;
  }
  getArea() {
    console.log((this.a * this.b) / 2);
  }

  getHypotenuse() {
    console.log(Math.sqrt(this.a ** 2 + this.b ** 2));
  }
}

const firstTri = new Triangle(3, 4);
firstTri.getHypotenuse(); // 5
firstTri.getArea(); // 6

// const badTri = new Triangle(-4, 10); // Uncaught Error: Invalid a: -4

// Practice
class BankAccount {
  constructor(accountNumber, accountHolder, balance = 0) {
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount < 0) return `Can't deposit a negative amount!`;
    this.balance += amount;
    return `Deposited $${amount}. New balance: $${this.balance}`;
  }

  withdraw(amount) {
    if (amount > this.balance) return "Insufficient funds";
    this.balance -= amount;
    return `Withdrawed $${amount}. New balance: $${this.balance}`;
  }
}

const anilAccount = new BankAccount("23anil", "Anil Beter");
console.log(anilAccount);
console.log(anilAccount.deposit(100)); // Deposited $100. New balance: $100
console.log(anilAccount.deposit(200)); // Deposited $200. New balance: $300
console.log(anilAccount.withdraw(500)); // Insufficient funds
console.log(anilAccount.withdraw(150)); // Withdrawed $150. New balance: $150
console.log(anilAccount.deposit(-23)); // Can't deposit a negative amount!
