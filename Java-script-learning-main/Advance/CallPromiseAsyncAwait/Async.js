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

// function getData(dataID, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataID);
//     getNextData();
//   }, 2000);
// }

// //data 1
// //data 2
// //data 3
// //NESTED CALLBACKS OR CALLBACK HELL-> this is a problem in javascript, to solve this problem we use promises
// getData(1, () => {
//   console.log("gettin data 2");
//   getData(2, () => {
//     console.log("gettin data 3");
//     getData(3, () => {
//       console.log("gettin data 4");
//       getData(4);
//     });
//   });
// }); //callback hell

// //the above data is fetched altogether after 2 seconds
// //but if we want to fetch data in sequence like first data 1 then data 2
// //then data 3 we can use callback hell
// //but this is not a good practice

// //PROMISES++++++++++++++++++++++++++++++++++++++++++++++
// //a promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// //a promise is in one of three states: pending, fulfilled, or rejected.
// //a promise is created using the Promise constructor, which takes a function with two arguments: resolve and reject.
// //the resolve function is called when the asynchronous operation is successful, and the reject function is called when the operation fails.
// //a promise can be consumed using the then and catch methods.
// //the then method is called when the promise is fulfilled, and the catch method is called when the promise is rejected.
// //promises can be chained together using the then method, allowing for sequential asynchronous operations.
// //promises can be created using the Promise.resolve and Promise.reject methods.

//PROMISES IN JAVASCRIPT IF FOR "EVENTUAL" COMPLETION OF TASK.
//IT IS AN OBJECT IN JS
//IT IS A SOLUTION TO CALLBACK HELL

// let promise = new Promise(function (resolve, reject) {
//   console.log("i am a promise");
//   //   resolve("success");
//   reject("failure");
// });

// function getData(dataID, getNextData) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("data", dataID);
//       resolve("success");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }

//using promise
//.then() method is used to handle the resolved value of the promise
//.catch() method is used to handle the rejected value of the promise

// const getPromise = () => {
//   return new Promise(function (resolve, reject) {
//     console.log("i am a promise");
//     // resolve("success");
//     reject("failure");
//   });
// };

// let promise = getPromise();
// promise.then((res) => {
//   console.log("promise fulfilled", res);
// });

// promise.catch((err) => {
//   console.log("promise rejected", err);
// });

//PROMISE CHAINING++++++++++++++++++++++++++++++++++++++++++++++
function asyncFun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data 1");
      resolve("success");
    }, 4000);
  });
}

function asyncFun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data 2");
      resolve("success");
    }, 5000);
  });
}
// console.log("fetching data 1...");

// let p1 = asyncFun1();
// p1.then((res) => {
//   console.log("promise fulfilled", res);
//   console.log("fetching data 2...");
//   let p2 = asyncFun2();
//   p2.then((res) => {
//     console.log("promise fulfilled", res);
//   });
// });
// p1.catch((err) => {
//   console.log("promise rejected", err);
//   p2.catch((err) => {
//     console.log("promise rejected", err);
//   });
// });
//==============the below code gets executed along with the above code after 4 seconds instantally.
// console.log("fetching data 2...");

// let p2 = asyncFun2();
// p2.then((res) => {
//   console.log("promise fulfilled", res);
// });
// p2.catch((err) => {
//   console.log("promise rejected", err);
// });

//=================1111111111111111111==========================

// console.log("fetching data 1...");

// let p1 = asyncFun1();
// p1.then((res) => {
//   console.log("promise fulfilled", res);
//   console.log("fetching data 2...");
//   let p2 = asyncFun2();
//   p2.then((res) => {
//     console.log("promise fulfilled", res);
//   });
// });
// p1.catch((err) => {
//   console.log("promise rejected", err);
//   p2.catch((err) => {
//     console.log("promise rejected", err);
//   });
// });
//easy way of writing the above code
// console.log("fetching data 1...");
// asyncFun1().then((res) => {
//   console.log("object promise fulfilled", res);
//   console.log("fetching data 2...");
//   asyncFun2().then((res) => {
//     console.log("promise fulfilled", res);
//   });
// });

//ASYNC AWAIT++++++++++++++++++++++++++++++++++++++++++++++++++++++
//it is a syntactic sugar over promises
//it makes asynchronous code look and behave like synchronous code
//it is easier to read and write
//it is built on top of promises
//it is used to handle promises in a more elegant way
//it is used to avoid callback hell and promise chaining

async function hello() {
  console.log("hello");
}

//AWAIT
//it is used to wait for a promise to resolve or reject
//it can only be used inside an async function
//it makes the code wait until the promise is resolved or rejected
//it returns the resolved value of the promise
function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data from api");
      resolve("success");
    }, 4000);
  });
}

async function fetchData() {
  console.log("fetching data...");
  await api();
}
