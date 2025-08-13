//Arithmetic Operators
console.log(
  "===========================Arithmetic Operators======================="
);
// Basic Arithmetic Operations
let a = 10;
let b = 5;
console.log("Addition:", a + b); // Outputs: 15
console.log("Subtraction:", a - b); // Outputs: 5
console.log("Multiplication:", a * b); // Outputs: 50
console.log("Division:", a / b); // Outputs: 2

console.log("Modulus:", a % b); // Outputs: 0
console.log("Exponentiation:", a ** b); // Outputs: 100000
//Unary Operators
console.log(
  "===========================Unary Operators======================="
);
console.log("Increment:", ++a); // Outputs: 11
console.log("Decrement:", --b); // Outputs: 4

//===================================================================================================
// Assignment Operators
console.log(
  "===========================Assignment Operators======================="
);
let x = 20;
let y = 10;
x += y; // x = x + y
console.log("x after +=:", x); // Outputs: 30
// x = x + y
y -= 5; // y = y - 5
console.log("y after -=:", y); // Outputs: 5
x *= 2; // x = x * 2
console.log("x after *=:", x); // Outputs: 60
y /= 2; // y = y / 2
console.log("y after /=:", y); // Outputs: 2.5
x %= 7; // x = x % 7
console.log("x after %=", x); // Outputs: 4
y **= 3; // y = y ** 3
console.log("y after **=:", y); // Outputs: 15.625
//===================================================================================================
// Comparison Operators
console.log(
  "===========================Comparison Operators======================="
);
let num1 = 10;
let num2 = 20;
console.log("Equal:", num1 == num2); // Outputs: false
console.log("Not Equal:", num1 != num2); // Outputs: true
console.log("Strict Equal:", num1 === num2); // Outputs: false
console.log("Strict Not Equal:", num1 !== num2); // Outputs: true
console.log("Greater Than:", num1 > num2); // Outputs: false
console.log("Less Than:", num1 < num2); // Outputs: true
console.log("Greater Than or Equal:", num1 >= num2); // Outputs: false
console.log("Less Than or Equal:", num1 <= num2); // Outputs: true
//===================================================================================================
// Logical Operators
console.log(
  "===========================Logical Operators======================="
);
let condition1 = true;
let condition2 = false;
console.log("Logical AND:", condition1 && condition2); // Outputs: false
console.log("Logical OR:", condition1 || condition2); // Outputs: true
console.log("Logical NOT:", !condition1); // Outputs: false
console.log("Logical NOT:", !condition2); // Outputs: true
//===================================================================================================
// Bitwise Operators
console.log(
  "===========================Bitwise Operators======================="
);
let bit1 = 5; // 0101 in binary
let bit2 = 3; // 0011 in binary
console.log("Bitwise AND:", bit1 & bit2); // Outputs: 1 (0001 in binary)
console.log("Bitwise OR:", bit1 | bit2); // Outputs: 7 (
// 0111 in binary)
console.log("Bitwise XOR:", bit1 ^ bit2); // Outputs: 6 (0010 in binary)
console.log("Bitwise NOT:", ~bit1); // Outputs: -6 (inverts all bits)
console.log("Left Shift:", bit1 << 1); // Outputs: 10 (1010 in binary)
console.log("Right Shift:", bit1 >> 1); // Outputs: 2 (0010 in binary)
console.log("Zero Fill Right Shift:", bit1 >>> 1); // Outputs: 2 (0010 in binary)
//===================================================================================================
// Ternary Operator
console.log(
  "===========================Ternary Operator======================="
);
let age = 18;
let canVote = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Outputs: Yes, you can vote.
