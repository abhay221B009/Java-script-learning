//foreach loop in arrays//this is a method in arrays
//arr.forEach(callbackFn(currentValue, index, array) {
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr1.forEach(function printVal(val) {
  console.log(val);
});

//arrow function in arrays
let array = ["a", "b", "c", "d", "e"];
array.forEach((val) => {
  console.log(val.toUpperCase());
});

let array1 = ["a", "b", "c", "d", "e"];
array.forEach((val, idx) => {
  console.log(val.toUpperCase(), idx);
});

let array3 = ["a", "b", "c", "d", "e"];
array.forEach((val, idx, arr) => {
  console.log(val.toUpperCase(), idx, arr);
});

//Higher order functions in arrays are functions that take a function as an argument or return a function as a result.
let array4 = ["a", "b", "c", "d", "e"];
let newArray = array4.map((val) => {
  return val.toUpperCase();
});
console.log(newArray);
