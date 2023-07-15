console.log("Variables in JS");

var firstName = "Ayush";
const club = "Manchester United";
var city = "Kolkata";
var marks = 72;
console.log(firstName, club, city, marks);

//Rules for Javascript Variables:
/*
1. Cannot start with number
2. Can start with letter, number, _ and $.
3. Case Sensitive.
*/

{
  let city = "Bombay";
  console.log(city);
}
console.log(city);

//var is used for variables. Used in older versions of JS. Global Scope
//let is used for variables. Used in modern versions of JS. Block Level Scope.
//const is used for constants.

//collection of items
const arr1 = [12, 13, 85, 46, 75];
console.log(arr1);
//.push is used to insert items in array
arr1.push(45); //inserts 45 at the end of an array
console.log(arr1);
