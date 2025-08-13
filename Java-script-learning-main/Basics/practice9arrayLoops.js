let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
nums.forEach((num) => {
  console.log(num * num);
  console.log(num ** 2);
});

let calcSquare = (num) => {
  console.log(num * num);
};

nums.forEach(calcSquare);
