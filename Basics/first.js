// console.log("this is my first javascript file");
// alert("Hello, World!");

//VARIABLES
var myName = "John";
console.log(myName);

var myAge = 30;
console.log(myAge);
// Constants
const myCountry = "USA";
console.log(myCountry);

// Changing a variable
myName = "Jane";
console.log(myName);
// Changing a constant (will cause an error)
// myCountry = "Canada"; // Uncommenting this line will cause an error

a = null; // This is allowed, but not recommended
b = undefined; // This is allowed, but not recommended

//===================================================================================================
//Let Const Var
let myLetVariable = "I can change";
console.log(myLetVariable); // Outputs: I can change
myLetVariable = "I changed";
console.log(myLetVariable); // Outputs: I changed

const myConstVariable = "I cannot change";
console.log(myConstVariable); // Outputs: I cannot change
// myConstVariable = "I tried to change"; // Uncommenting this line will cause an error
// console.log(myConstVariable); // This line will not run because of the error above

var myVarVariable = "I can also change";
console.log(myVarVariable); // Outputs: I can also change
myVarVariable = "I changed again";
console.log(myVarVariable); // Outputs: I changed again
//===================================================================================================
// Data Types
let myNumber = 42; // Number
console.log(typeof myNumber); // Outputs: number

let myString = "Hello"; // String
console.log(typeof myString); // Outputs: string

let myBoolean = true; // BooleanS
console.log(typeof myBoolean); // Outputs: boolean

let myArray = [1, 2, 3]; // Array
console.log(typeof myArray); // Outputs: object

const myObject = { name: "Alice", age: 25 }; // Object
console.log(typeof myObject); // Outputs: object
console.log(myObject.name); // Outputs: Alice
name = "Abhay";
console.log(myObject.name); // Outputs: Abhay

console.log(myObject["age"]); // Outputs: 25
console.log(myObject.age); // Outputs: 25

let myNull = null; // Null
console.log(typeof myNull); // Outputs: object (this is a known JavaScript quirk)

let myUndefined; // Undefined
console.log(typeof myUndefined); // Outputs: undefined

let x = BigInt(1234567890123456789012345678901234567890); // BigInt
console.log(typeof x); // Outputs: bigint

let y = Symbol("unique"); // Symbol
console.log(typeof y); // Outputs: symbol

//===================================================================================================
