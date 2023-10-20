//This is a tutorial for selecting and working with elements on html page.

/*
Element Selectors can be of 2 types:
1. Single Element Selector.
2. Multi Element Selector.
*/

//Single Element Selector:
let element = document.getElementById("head");
//element = element.className; To retrieve the class name
//element = element.childNodes; To retrieve the child nodes
//element = element.parentNode; To retrieve the parent node
//There are many more such properties like innerHTML and innerText
console.log(element);

let sel = document.querySelector("#head"); //selects by id
console.log(sel);

let sel1 = document.querySelector(".head"); //selects by class
console.log(sel1);

//Multi Element Selector:
let multiElements = document.getElementsByClassName("head");
console.log(multiElements);

let tags = document.getElementsByTagName("h1");
console.log(tags);

//Iterating and operating
Array.from(tags).forEach((element) => {
  console.log(element);
  element.style.color = "green";
});
