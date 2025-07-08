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
