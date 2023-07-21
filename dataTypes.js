/*
    Data Types in JS
        Primitive Data Types
            String: Collection of characters.
            Numbers
            Boolean: True or False
            Null: Empty Value
            Undefined
            Symbol
        Reference Data Types
            Arrays
            Objects
            functions
            dates
*/

//Primitive Data Types
let firstName = "Ayush";
console.log("My String is " + firstName);
console.log("DataType is " + typeof firstName);

let marks = 34;
console.log("My String is " + marks);
console.log("DataType is " + typeof marks);

let canDrive = false;
console.log("Ability to drive: " + canDrive);
console.log("DataType is " + typeof canDrive);

let nullVar = null;
console.log("DataType of nullVar is " + typeof nullVar);

let undef = null;
console.log("DataType of undef is " + typeof undef);

//Reference Data Types

//Arrays
myarr = [1, 2, 3, 4, 5];
console.log("DataType of myarr is " + typeof myarr);

//Object literals

let marksObj = {
  Ayush: 35,
  Rohan: 36,
  Sachin: 80,
};

console.log(marksObj);
console.log("Datatype of marksObj is" + typeof marksObj);

//Functions
function sample() {
  console.log("Hello World");
}

console.log("DataType of sample() is " + typeof sample);

//Date
let date = new Date();
console.log("DataType of date is " + typeof date);
