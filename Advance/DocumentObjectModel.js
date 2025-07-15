// // //<style> tag connects html with css and html with js
// // console.log("hello user");
// // alert("this is abhay ");

// console.log(window);
// window.console.log("hello2");

// DOM ->
//when a web page is loaded , the browser creates a Document Object Model (DOM) of the page

//console.dir->it prints object and methods

//+===================DOM MANUPULATION===================

//selecting with id
//document.getElementById('myID')-> for selecting a single item (for e.g. H1 tag)

//selecting with class
//document.getElementByClassName("myClass")-> for multiple items

//selecting by tag
//document.getElementsByTagName("p")

//QUERY SELECTOR

//document.querySelector("myId")

//document.querySelector("myClass")2

//document.querySelector("tag")
//all the above query selector returns first

//document.querySelectorAll("myId/myClass/tag")
//this returns a nodelist

console.log("abhay");
// window.log("hello");
// window.alert("welcome to javascript learning    ");

alert("abhay");

// 15 july

//DOM #2

// //ATTRIBUTE
// //getAttribute(attr) -> to get attribute value
// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// console.log(div.setAttribute("box", "rectangle"));

let para = document.querySelector("p");
para.style.color = "green";
para.style.fontSize = "100px";
para.style.borderColor = "magenta";
para.style.backgroundColor = "white";
