console.log("learning javascript from scratch ");
//alert("hello world");
console.log("work hard for yourself...");
console.log(2 + 2);
console.warn("this is a warning"); //this  show warning text having different color in the console.
console.table({ name: "abhay", age: 21 }); //this is used to create tables.
console.log("helllo");
console.log("helllo");
console.log("helllo");
console.log("helllo");
console.log("helllo");
//console.clear(); //this clears the console -> what ever is written before this line of code
console.log(44 * 2);

//shortcut to write the snippet "console.log() :is -> clg"
//===============================================================================================================

// VARIABLES:-

//var keyword is nowdays not in use frequently
//istead of var nowdays developers are using 'let' keyword

let name = "Abhay";
console.log(name);

let age = 21;
console.log(age);

let names = "Mishty";
names = "Abhay"; //this will update the names variable name from mishty to abhay
console.log(names);

const name1 = "mishty"; //const keyword will not let the varible name1 not change its value to something else and will throw error if someone tries to do so.
console.log(name1);

let name2 = "abhay webdev";
let whatyouwanttodoinyourlife = "programmer";
let gender = "male";
let insta = "abhay_r_c";
console.log(name2);
console.log(whatyouwanttodoinyourlife);
console.log(gender);
console.log(insta);

//========================================================================================================================================================================

//PRIMITIVE TYPES:
//--1.Number----

let num = 10000000;
console.log(num);

let num1 = -10;
console.log(num1);

let num2 = 10.11;
console.log(num2);

console.log(typeof num);
console.log(typeof num1);
console.log(typeof num2);

//BASIC MATH  in javascript-----

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(11 % 2);
console.log(2 ** 2); //this means two to the power of two
console.clear(); //above outouts are cleared using this code

let counter = 0;
counter++;
counter++; //increaments the counter variable value by one.

console.log(counter); //this wil output 2(0+1+1);
counter--; //decreases the value of counter variable by one
console.log(counter); //output=1(0+1+1-1)
//----------------------------------------------------------------------------------------------------------

console.clear(); //the above output are cleared using this

let firstNumber = 120;
let secondNumber = 30;
console.log(firstNumber + secondNumber);
console.log(firstNumber - secondNumber);
console.log(firstNumber * secondNumber);
console.log(firstNumber / secondNumber);
console.log(firstNumber % secondNumber);
console.log(firstNumber ** secondNumber);

console.clear();

//============================================================================================================
//BOOLEANS-----

let isTrue = true;
console.log(isTrue);

let isTrue2 = false;
console.log(isTrue2);

//isNAN - not a number....

let number = 10;
console.log(number + undefined); //output  will be NaN (not a number).

//falsy------values------------------

//1.false
//2.null
//3.undefined
//4. 0
//5. -0
//6.NaN
//7. ' ' , " "  , (empty quotes)

console.clear();

let notDefined = undefined; //when value is given to a variable then java compiler show undefined as output.
console.log(notDefined);

let notDefined1 = null; //this null can be set as a value for a varible where the developer does not want any kind of value to be provided.
console.log(notDefined1);

console.clear();

let isJsProgrammingLanguage = true;
let isJsHard = false;
let favNumb = 11;
console.log(isJsProgrammingLanguage);
console.log(isJsHard);
console.log(favNumb + undefined);

console.clear();
