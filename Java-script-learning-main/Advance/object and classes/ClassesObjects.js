//prototypes
// A javasript  object is an entity having state and behavior (properties and methods).
//Js objects have a special property called prototype.
//we set protoytype using ___proto___

const student = {
  //direct way of creating an object
  fullName: "Abhay Raj Chauhan",
  Age: 20,
  printAge: function () {
    console.log("age= ", this.Age); //this refers to the current object
  },
};

let arr = ["apple", "banana", "orange"];
// Declare and initialize the employee variable
const employee = {
  calctax: function () {
    // ... tax calculation logic
    console.log("Calculating tax...");
  },
};
const karanArjun = {
  salary: 50000,
  calctax: function () {
    //  when there is a clash bewtween the method of the object and the prototype, the method of the object is called
    // ... tax calculation logic
    console.log("Calculating tax for Karan Arjun...");
  },
};

karanArjun.__proto__ = employee; // Setting prototype
console.log("Karan Arjun's salary:", karanArjun.salary);
karanArjun.calctax(); // Inherits method from employee prototype

//CLASSES

//class is a program template for creating objects.
//those objects will have some state (variables) and some behaviour(functions) inside it.

//class is bsically a blueprint for creating objects

class ToyotaCar {
  start() {
    console.log("starting the car");
  }

  stop() {
    console.log("stopping the car");
  }

  setBrand(brand) {
    this.brandName = brand;
  }

  setBrand(brand) {
    this.brand = brand; //here first brand is different from the second brand
  }
}

//creating an object of the class
//const myCar = new ToyotaCar();

let fortuner = new ToyotaCar();
let lexus = new ToyotaCar();
fortuner.setBrand("Fortuner");
lexus.setBrand("Lexus");
