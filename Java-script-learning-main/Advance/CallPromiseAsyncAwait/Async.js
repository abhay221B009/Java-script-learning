//async>>promise chains>>callback hell.
//synchronous means code runs in sequence of instructions given in the program.
//each instruction waits for the previous instruction to complete before executing.

//asynchronous means code runs independently of the main program flow.
//each instruction can execute without waiting for the previous instruction to complete.

console.log("one");
console.log("two");
console.log("three");

//this is synchronous code.
//output: one two three
//in synchronous code, each instruction waits for the previous one to complete before executing.
//this can lead to blocking of the main thread if an instruction takes a long time to complete.

//ASYNCHRONOUS CODE
console.log("asynchronous code starts here");

function hello() {
  console.log("hello");
}
setTimeout(hello, 2000); //2 seconds == 2000 milliseconds

//another method

setTimeout(function () {
  console.log("hello from setTimeout");
}, 6000); //6 seconds == 6000 milliseconds
