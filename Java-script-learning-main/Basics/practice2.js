//printing even numbers form 2 to 100
for (let i = 2; i <= 100; i++) {
  if (i % 2 === 0) console.log(i);
}

//using while loop to print even numbers from 2 to 100
let j = 2;
while (j <= 100) {
  if (j % 2 === 0) console.log(j);
  j++;
}
//using do while loop to print even numbers from 2 to 100
let k = 2;
do {
  if (k % 2 === 0) console.log(k);
  k++;
} while (k <= 100);
//using for of loop to print even numbers from 2 to 100
let arr = [];
for (let i = 2; i <= 100; i++) {
  arr.push(i);
}
for (let num of arr) {
  if (num % 2 === 0) console.log(num);
}
//using for in loop to print even numbers from 2 to 100
let obj = {};
for (let i = 2; i <= 100; i++) {
  obj[i] = i;
}
for (let key in obj) {
  if (obj[key] % 2 === 0) console.log(obj[key]);
}
