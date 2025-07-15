//prompt the user to enter a fullname , generate username based on their input , start username with @ and end it with fullname length
//example @abhay5
let fullName = prompt("enter your fullname without spaces");

let userName = "@" + fullName + fullName.length;
console.log(userName); // @abhay5
