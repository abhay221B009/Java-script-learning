//we are given array of marks of students . filter out of the marks of students that scored 90+
let marks = [65, 97, 98, 4, 6, 1, 64, 79, 4, 6, 4];
let highScorers = marks.filter((mark) => {
  return mark >= 90; // Returns only marks that are 90 or above
});
console.log("High Scorers (90 and above):", highScorers);

//take a number n as input from the user . create an array of numbers from 1 to n
//use reduce method to calculate the sum of all numbers in the array.
//use the reduce method to calculate the product of all numbers in the array.
let n = prompt("enter a number");
let arr5 = [];

for (let i = 0; i < n.length; i++) {
  arr5[i] = i;
}
console.log(arr5);

let sum1 = arr5.reduce((prev, curr) => {
  return prev + curr;
});
console.log(sum1);

let product = arr5.reduce((prev, curr) => {
  return prev * curr;
});
console.log(product);
