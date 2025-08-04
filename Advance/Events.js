let btn1 = document.querySelector("#btn1");
btn1.onclick = function () {
  console.log("button was clicked");
  alert("button was clicked");
  let a = 30;
  console.log(a);
  a++;
  console.log(a);
};
let box = document.querySelector("#box");
box.onmouseover = function () {
  console.log("mouse is over the box");
  box.style.backgroundColor = "red";
};
