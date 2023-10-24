//This is a tutorial on DOM manipulation and traversal

console.log("This is the tutorial for DOM Manipulation");

let cont = document.querySelector(".container");
console.log(cont.childNodes); //This also consider empty lines and texts.
console.log(cont.children); //Only considers elements

let nodeName = cont.childNodes[1].nodeName;
console.log(nodeName);

let nodeType = cont.childNodes[1].nodeType;
console.log(nodeType);

/* Node Types:
1. element 
2. Attribute
3. Text Node
8. Comment
9. Document
10. docType
*/

let anchor = document.createElement("a");
anchor.className = "hyperlink";
anchor.innerHTML =
  "This is a hyperlink to google. This is created from DOM Manipulation";
anchor.innerText =
  "This is a hyperlink to google. This is created from DOM Manipulation";
anchor.id = "google";
anchor.setAttribute("title", "mytitle");
anchor.href = "https://www.google.com";
console.log(anchor);
console.log(anchor.attributes);

let container = document.querySelector(".container");
container.appendChild(anchor);
console.log(container);
console.log(anchor);
