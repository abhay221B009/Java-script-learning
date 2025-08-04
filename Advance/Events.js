let btn1 = document.querySelector("#btn1");
// btn1.onclick = function (e) {
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   console.log(e.clientX, e.clientY); // Mouse position relative to the viewport

//   console.log("button was clicked");
//   alert("button was clicked");
//   let a = 30;
//   console.log(a);
//   a++;
//   console.log(a);
// };
//event listener
btn1.addEventListener("click", function (e) {
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log("button one was clicked");
});
btn1.addEventListener("click", () => {
  console.log("button1 was clicked - handler2");
});

const handler3 = () => {
  console.log("button1 was clicked - handler3");
};

btn1.addEventListener("click", handler3);

btn1.addEventListener("click", () => {
  console.log("button1 was clicked - handler4");
});

btn1.removeEventListener("click", handler3);

let box = document.querySelector("#box");
box.onmouseover = function (e) {
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.clientX, e.clientY);
  console.log("mouse is over the box");
  box.style.backgroundColor = "red";
};
box.onmouseout = function () {
  console.log("mouse left the box");
  box.style.backgroundColor = "blue"; // Revert to original
};

//EVENT OBJECT -> HAVE THE INFORMATION ABOUT THE EVENT.

//EVENT LISTENER -> FUNCTION THAT WILL BE EXECUTED WHEN THE EVENT OCCURS.
//node.addEventListener(event , callback);
//node.removeEventListener(event , callback);
//NOTE: THE CALLBACK REFERENCE SHOULD BE SAME TO REMOVE
//callback -> is a function also knqwn as event handler
