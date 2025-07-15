let marks = [65, 97, 98, 4, 6, 1, 64, 79, 4, 6, 4];
console.log(marks);
console.log(marks.length);

console.log("=====string-array======");
let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman"];
console.log(heroes);
console.log(heroes.length);

console.log("=====Types=====");
console.log(typeof heroes);
console.log(typeof marks);

console.log("=====Indices=====");
console.log(heroes[0], heroes[3], marks[6], marks[10]);
console.log(typeof marks[3]);
console.log(typeof heroes[3]);

console.log(marks);
marks[0] = 69;

console.log(marks);

//looping in arrays
console.log("=====looping of arrays  'iterables'====");

for (let i = 0; i < marks.length; i++) {
  console.log(marks[i]);
}

for (let hero of heroes) {
  console.log(hero);
}

console.log("=====Cities====");
//==================================
let cities = ["delhi", "kolkata", "chandigarh", "mumbai", "pune", "jaunpur"];
for (let city of cities) {
  console.log(city);
}

for (let city of cities) {
  console.log(city.toUpperCase());
}
