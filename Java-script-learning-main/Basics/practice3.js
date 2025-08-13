// //Create a game where you start with a random game number.Ask the user to keep guessing the game number until the user enters the correct value
// let gameNumber = Math.floor(Math.random() * 50) + 1; //gives a random number between 1 and 50
// let userGuess = 0;
// let guessCount = 0;

// while (userGuess !== gameNumber) {
//   userGuess = parseInt(prompt("Guess the game number (between 1 and 50):"));
//   guessCount++;

//   if (userGuess < gameNumber) {
//     console.log("Too low! Try again.");
//   } else if (userGuess > gameNumber) {
//     console.log("Too high! Try again.");
//   } else {
//     console.log(
//       `Congratulations! You've guessed the number ${gameNumber} in ${guessCount} attempts.`
//     );
//   }
// }

let gameNumber = 20;
let userNum = prompt("Guess a number between 1 and 50:"); // returns string

while (userNum != gameNumber) {
  // loose comparison
  userNum = prompt("You guessed it wrong. Guess again between 1 and 50:");
}

console.log("You guessed it right! The number is " + gameNumber);
