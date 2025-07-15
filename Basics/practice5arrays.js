let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let mark of marks) {
  sum += mark;
}
let avgMarks = sum / marks.length;

console.log(`The total marks of all students : ${sum}`);
console.log(`Average marks obtained by students: ${avgMarks}`);
