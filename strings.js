//strings

//creating a string
let str = "hello mr coder";

//string length
console.log(str.length); // 15

//string indexing
console.log(str[0]); // h

//TEMPLATE LITERALS
let name = `Abhay , this is my name`;
console.log(name); // Abhay , this is my name
console.log(typeof name); // string

let obj = {
  item: "laptop",
  price: 50000,
  brand: "HP",
};

// console.log(
//   "the cost of my " +
//     obj.item +
//     " which is of brand " +
//     obj.brand +
//     " is " +
//     obj.price
// );
//the obove console.log can be written in template literals as follows
console.log(
  `the cost of my ${obj.item} which is of brand ${obj.brand} is of price ${obj.price}`
);

//string interpolation
let a = 10;
let b = 20;
console.log(`The sum of ${a} and ${b} is ${a + b}`); // The sum of 10 and 20 is 30

//escaping characters
let escapedStr = "He said \nHello!"; // using backslash to escape
console.log(escapedStr); // He said, "Hello!"
let singleQuoteStr = "It's a sunny day"; // using backslash to escape single quote
console.log(singleQuoteStr); // It's a sunny day

//string methods
