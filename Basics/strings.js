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

//STRING METHODS/FUNCTIONS
//1. toUpperCase() and toLowerCase()
let str1 = "Hello Mr Coder";
console.log(str1.toUpperCase()); // HELLO MR CODER
console.log(str1.toLowerCase()); // hello mr coder

//str.trim() removes whitespace from both ends of a string
let str2 = "   Hello Mr Coder   ";
console.log(str2.trim()); // Hello Mr Coder

//2. str.slice(start, end) extracts a section of a string and returns it as a new string
let str3 = "Hello Mr Coder";
console.log(str3.slice(0, 5)); // Hello
console.log(str3.slice(7, 12)); // Mr

//str.concat() joins two or more strings
let str4 = "Hello";
let str5 = "World";
console.log(str4.concat(" ", str5)); // Hello World

//str.replace(searchValue, newValue) replaces a specified value with another value in a string
let str6 = "Hello Mr Coder";
console.log(str6.replace("Mr", "Mrs")); // Hello Mrs Coder

//str.charAt(index) returns the character at the specified index
let str7 = "Hello Mr Coder";
console.log(str7.charAt(0)); // H
//str.indexOf(searchValue) returns the index of the first occurrence of a specified value in a string
console.log(str7.indexOf("Mr")); // 6S
//str.lastIndexOf(searchValue) returns the index of the last occurrence of a specified value in a string
console.log(str7.lastIndexOf("o")); // 10
//str.split(separator) splits a string into an array of substrings
let str8 = "Hello Mr Coder";
console.log(str8.split(" ")); // [ 'Hello', 'Mr', 'Coder' ]
//str.includes(searchValue) checks if a string contains a specified value
console.log(str8.includes("Mr")); // true
//str.startsWith(searchValue) checks if a string starts with a specified value
console.log(str8.startsWith("Hello")); // true
//str.endsWith(searchValue) checks if a string ends with a specified value
console.log(str8.endsWith("Coder")); // true
//str.repeat(count) returns a new string with a specified number of copies of the original string
let str9 = "Hello ";
console.log(str9.repeat(3)); // Hello Hello Hello
//str.search(regexp) searches a string for a match against a regular expression and returns the index of the match
let str10 = "Hello Mr Coder";
console.log(str10.search(/Mr/)); // 6
//str.match(regexp) retrieves the matches when matching a string against a regular expression
let str11 = "Hello Mr Coder";
console.log(str11.match(/Mr/)); // Mr
//str.localeCompare(compareString) compares two strings in the current locale
