//conditional statements

let age = 41;
if (age >= 18) {
  console.log("Eligible to vote");
}
if (age < 18) {
  console.log("Underage");
}
if (age < 40) {
  console.log("Sarkar apni hi hai");
} else {
  console.log("mat do vote");
}

let mode = "light";
let color;
if (mode === "dark") {
  color = "black";
}
if (mode === "light") {
  color = "white";
}

console.log(color);

console.log("=====================if-else statement==================");
//IF_ELSE STATEMENT
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

console.log("=====================even-odd program==================");

let number = 7;
if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

//ternary operator
console.log("=====================ternary operator==================");

let umar = 23;
let result = umar <= 18 ? "minor" : "major";
console.log(result);

//switch statement
console.log("=====================switch statement==================");
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");

    break;

  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;

  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Invalid day");
}
console.log(
  "=====================switch statement with break=================="
);
let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("Apple is red");
    break;
  case "banana":
    console.log("Banana is yellow");
    break;
  case "grape":
    console.log("Grape is purple");
    break;
  default:
    console.log("Unknown fruit");
}
