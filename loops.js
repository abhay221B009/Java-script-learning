//For loop

for (let i = 0; i < 5; i++) {
  console.log("Hello World");
}

console.log(
  "=====================sum of first n natural numbers=================="
);
//sum of first n natural numbers
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum of first 100 natural numbers is: " + sum);

console.log("======while loop ======");

//while loop
let j = 0;
while (j < 5) {
  console.log("Hello Abhay");
  j++;
}

console.log("=====DO while loop ======");

//do while loop
let k = 5;
do {
  console.log("Hello brother  ");
  k--;
} while (k > 0);

//for of loop

console.log("=====for of loop ======");
let arr = [1, 2, 3, 4, 5];
for (let value of arr) {
  console.log(value);
}
