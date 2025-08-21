// ===============================
// PROTOTYPES
// ===============================
// A JavaScript object is an entity having state (properties) and behavior (methods).
// Every JS object has a special property called `prototype`.
// We can set a prototype using `__proto__`.

const student = {
  // Direct way of creating an object
  fullName: "Abhay Raj Chauhan",
  age: 20,
  printAge: function () {
    console.log("Age:", this.age); // `this` refers to the current object
  },
};

// Example: Arrays in JS are also objects
let fruits = ["apple", "banana", "orange"];

// Prototype example
const employee = {
  calcTax: function () {
    console.log("Calculating tax...");
  },
};

const karanArjun = {
  salary: 50000,
  calcTax: function () {
    // If the object has its own method,
    // it overrides the method from the prototype
    console.log("Calculating tax for Karan Arjun...");
  },
};

// Setting prototype
karanArjun.__proto__ = employee;

console.log("Karan Arjun's salary:", karanArjun.salary);
karanArjun.calcTax(); // Uses object’s own method (not prototype’s)

// ===============================
// CLASSES
// ===============================
// A class is a blueprint/template for creating objects.
// Objects created from a class will have state (variables) and behavior (functions).

class ToyotaCar {
  constructor(brand, mileage) {
    console.log("Creating a new Toyota Car using constructor...");
    this.brandName = brand; // instance property
    this.mileage = mileage; // instance property
  }

  start() {
    console.log(this.brandName, "is starting...");
  }

  stop() {
    console.log(this.brandName, "is stopping...");
  }

  setBrand(brand) {
    this.brandName = brand; // updates brand name
  }
}

// Creating objects of the class
let fortuner = new ToyotaCar("Fortuner", 10);
let lexus = new ToyotaCar("Lexus", 20);

fortuner.start();
lexus.stop();

// ===============================
// INHERITANCE
// ===============================
// Inheritance allows a class to inherit properties and methods from another class.

class Parent {
  hello() {
    console.log("Hello from Parent class");
  }
}

class Child extends Parent {}

let child = new Child();
child.hello(); // Inherited method

// Another example with constructors
class Person {
  constructor(name) {
    console.log("Entering Parent constructor...");
    this.species = "Homo sapiens"; // common property
    this.name = name;
    console.log("Exiting Parent constructor...");
  }

  eat() {
    console.log(this.name, "is eating");
  }

  sleep() {
    console.log(this.name, "is sleeping");
  }

  work() {
    console.log(this.name, "does nothing by default");
  }
}

class Engineer extends Person {
  constructor(name, branch) {
    super(name); // calls parent constructor (mandatory before using `this`)
    console.log("Entering Child constructor...");
    this.branch = branch;
    console.log("Exiting Child constructor...");
  }

  // Method overriding: child class method replaces parent method
  work() {
    super.eat();
    console.log(this.name, "is coding in", this.branch);
  }
}

// Creating an Engineer object
let eng = new Engineer("Abhay", "Computer Science");
eng.eat(); // Inherited from Person
eng.work(); // Overridden method

// ===============================
// SUPER KEYWORD
// ===============================
// `super` is used to call the parent class constructor
// and also access parent class methods/properties
