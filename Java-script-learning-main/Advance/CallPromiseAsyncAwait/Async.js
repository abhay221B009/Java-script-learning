// //async>>promise chains>>callback hell.
// //synchronous means code runs in sequence of instructions given in the program.
// //each instruction waits for the previous instruction to complete before executing.

// //asynchronous means code runs independently of the main program flow.
// //each instruction can execute without waiting for the previous instruction to complete.

// console.log("one");
// console.log("two");
// console.log("three");

// //this is synchronous code.
// //output: one two three
// //in synchronous code, each instruction waits for the previous one to complete before executing.
// //this can lead to blocking of the main thread if an instruction takes a long time to complete.

// //ASYNCHRONOUS CODE
// console.log("asynchronous code starts here");

// function hello() {
//   console.log("hello");
// }
// setTimeout(hello, 2000); //2 seconds == 2000 milliseconds

// //another method

// setTimeout(function () {
//   console.log("five");
// }, 6000); //6 seconds == 6000 milliseconds

// console.log("four");

//CALLBACK++++++++++++++++++++++++++++++++

// function sum(a, b) {
//   console.log(a + b);
// }

// function calculate(a, b, sumcallback) {
//   sumcallback(a, b);
// }

// calculate(5, 10, sum); //we can eigther pass function name or function definition as argunment

// const hello = () => {
//   console.log("hello");
// };

// setTimeout(hello, 1000); //2 seconds == 2000 milliseconds

// //CALLBACK HELL+++++++++++++++++++++++++++++++
// //nested callbacks stacked below one another forming a pyramid shape structure
// //this style of programming becomes

// let age = 19;
// if (age > 18) {
//   if (age >= 60) {
//     console.log("senior citizen");
//   } else {
//     console.log("middle");
//   }
// } else {
//   console.log("minor");
// }

// //this is a example of nesting

function getData(dataID, getNextData) {
  setTimeout(() => {
    console.log("data", dataID);
    getNextData();
  }, 2000);
}

//data 1
//data 2
//data 3
getData(1, () => {
  getData(2, () => {
    getData(3, () => {});
  });
}); //callback hell

//the above data is fetched altogether after 2 seconds
//but if we want to fetch data in sequence like first data 1 then data 2
//then data 3 we can use callback hell
//but this is not a good practice
