let btn1 = document.querySelector("#btn1");
btn1.onclick = function (e) {
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.clientX, e.clientY); // Mouse position relative to the viewport

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
box.onmouseout = function () {
  console.log("mouse left the box");
  box.style.backgroundColor = "blue"; // Revert to original
};

//EVENT OBJECT -> HAVE THE INFORMATION ABOUT THE EVENT.
