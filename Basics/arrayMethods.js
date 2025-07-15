//push : add to end
//pop : remove from end
//toString : convert to string

let veggies = ["carrot", "broccoli", "spinach"];
console.log("Original array:", veggies);
// push
veggies.push("karela");
console.log("After push:", veggies);

veggies.pop();
veggies.pop();
console.log("After pop:", veggies);

console.log("Array as string:", veggies.toString());

console.log("====concat====");
//joins multiple arrays
let avengers = ["ironman", "hulk", "thor", "captain america"];
console.log("Avengers:", avengers);
let dcHeroes = ["batman", "superman", "flash"];
console.log("DC Heroes:", dcHeroes);
// Concatenating arrays
let heroes = avengers.concat(dcHeroes);
console.log("Combined Heroes:", heroes);

console.log("=====shift and unshift=====");
// shift : remove from start
// unshift : add to start
let fruits = ["apple", "banana", "cherry"];
console.log("Original fruits array:", fruits);
// unshift
fruits.unshift("mango");
console.log("After unshift:", fruits);
// shift
fruits.shift();
console.log("After shift:", fruits);

console.log("====slice and splice====");
// slice : extract part of array
// splice : add or remove elements
let numbers = [1, 2, 3, 4, 5];
console.log("Original numbers array:", numbers);
// slice
let slicedNumbers = numbers.slice(1, 4); // Extracts elements from index
console.log("Sliced numbers (1 to 4):", slicedNumbers);
// splice
numbers.splice(2, 1, 10, 20); // Removes 1 element
console.log(
  "After splice (remove 1 element at index 2, add 10 and 20):",
  numbers
);
// splice can also be used to remove elements
let removedElements = numbers.splice(1, 2); // Removes 2 elements starting from index 1
console.log("Removed elements:", removedElements);
console.log("Array after removing elements:", numbers);

//MAP _ METHOD
console.log("====map method====");
//creates a new array with the results of some operation.The value its callback returns are used to form new array

let nums = [1, 2, 3, 4, 5];
let newNums = nums.map((val) => {
  return val ** 2;
});

console.log(newNums);
console.log(nums);

//FILTER _ METHOD
console.log("====filter method====");
//creates a new array of elements that give true for  CONDITION/FILter
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArr = arr1.filter((val) => {
  return val % 2 == 0; // Returns only even numbers
});
console.log("original array:", arr1);
console.log("Filtered array (even numbers):", newArr);

//REDUCE _ METHOD
console.log("====reduce method====");
//executes a reducer function on each element of the array, resulting in a single output value
let arr2 = [1, 2, 3, 4, 5];
let sum = arr2.reduce((accumulator, currentValue) => {
  return accumulator + currentValue; // Sums up all elements
}, 0); // Initial value is 0
console.log("Sum of array elements:", sum);

//printing the larget number in an array  using reduce
let arr3 = [10, 20, 30, 40, 50];
let largest = arr3.reduce((accumulator, currentValue) => {
  return accumulator > currentValue ? accumulator : currentValue; // Returns the larger of the two
}, arr3[0]); // Initial value is the first element of the array
console.log("Largest number in array:", largest);
