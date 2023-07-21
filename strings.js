//String manipulation

console.log("This is a tutorial on String Manaipulation");
let myName = "Ayush";
const greeting = "Good Morning";

console.log(greeting + " " + myName);

let multi;

multi = `This is a String with
multiple lines.`;

console.log(multi);

myName = myName.concat(" Mazumdar");
console.log(greeting + " " + myName);
console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

console.log("Character at first position: " + myName[0]);
console.log("Index of y?: " + myName.indexOf("y"));
console.log("Last Index of a?: " + myName.lastIndexOf("a"));
console.log("Character at index 4?: " + myName.charAt(4));
console.log("String has sh?: " + myName.includes("sh"));
console.log("Ends with sh?: " + myName.endsWith("sh"));
console.log("This is a substring: " + myName.substring(1, 6));
console.log("This is a sample slice: " + myName.slice(0, 4));
console.log("This is a sample split: " + myName.split(" "));
console.log("This is a replace sample: " + myName.replace("Mazumdar", "07"));
