// // // //<style> tag connects html with css and html with js
// // // console.log("hello user");
// // // alert("this is abhay ");

// // const { createElement } = require("react");

// // console.log(window);
// // window.console.log("hello2");

// // DOM ->
// //when a web page is loaded , the browser creates a Document Object Model (DOM) of the page

// //console.dir->it prints object and methods

// //+===================DOM MANUPULATION===================

// //selecting with id
// //document.getElementById('myID')-> for selecting a single item (for e.g. H1 tag)

// //selecting with class
// //document.getElementByClassName("myClass")-> for multiple items

// //selecting by tag
// //document.getElementsByTagName("p")

// //QUERY SELECTOR

// //document.querySelector("myId")

// //document.querySelector("myClass")2

// //document.querySelector("tag")
// //all the above query selector returns first

// //document.querySelectorAll("myId/myClass/tag")
// //this returns a nodelist

// // console.log("abhay");
// // window.log("hello");
// // window.alert("welcome to javascript learning    ");

// // alert("abhay");

// // 15 july

// //DOM #2

// // //ATTRIBUTE
// // //getAttribute(attr) -> to get attribute value
// // let div = document.querySelector("div");
// // console.log(div);

// // let id = div.getAttribute("id");
// // console.log(id);

// // console.log(div.setAttribute("box", "rectangle"));

// // let para = document.querySelector("p");
// // // para.style.color = "green";
// // // para.style.fontSize = "100px";
// // // para.style.borderColor = "magenta";
// // // para.style.backgroundColor = "white";
// // para.innerText = "hello world";
// // para.style.visibility = "hidden";
// //16 july dom manipulation

// //---INSERT_ELEMENTS---
// let newBtn = document.createElement("button");
// newBtn.innerText = "click me";
// console.log(newBtn);
// //node.append(el)
// // document.body.append(newBtn);
// // node.prepend(el);
// document.body.prepend(newBtn);
// //node.before(el)
// //document.body.before(newBtn);
// //node.after(el)
// //document.body.after(newBtn);
// //node.replaceWith(el)
// //document.body.replaceWith(newBtn);
// //node.remove()
// //newBtn.remove();

// let newHeading = document.createElement("h1");
// newHeading.innerText = "This is a new heading";
// document.body.prepend(newHeading);

// //DELETE ELEMENTS
// let para = document.querySelector("p");
// para.remove();
// //para.removeChild(para.firstChild); //removes first child of para
// //para.removeChild(para.lastChild); //removes last child of para
// //para.removeChild(para.childNodes[0]); //removes first child of para
// //para.removeChild(para.childNodes[para.childNodes.length - 1]); //removes last child of para
// //para.removeChild(para.childNodes[1]); //removes second child of para
// //para.removeChild(para.childNodes[para.childNodes.length - 2]); //rem
