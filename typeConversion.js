//Type Conversion
console.log("Work on Type Conversion");

let myvar;
myvar = 34;
console.log(myvar);
console.log("DataType of myvar " + typeof myvar);

myvar = String(34);
console.log(myvar);
console.log("DataType of myvar after conversion" + typeof myvar);

let date = new Date();
console.log(date);
console.log("DataType of date " + typeof date);

date = String(date);
console.log("DataType of date after conversion " + typeof date);

let myarr = [1, 2, 3, 4, 5];
console.log(myarr);
console.log("DataType of myarr is " + typeof myarr);
console.log(myarr.length);

myarr = String(myarr);
console.log("DataType of myarr after conversion " + typeof myarr);
console.log(myarr.length);

let i = true;
console.log(i.toString());

let num = "34";
console.log(num);
console.log("DataType of num " + typeof num);

num = Number(num);
console.log(num);
console.log("DataType of num after conversion " + typeof num);

let number = parseFloat("34.02695");
console.log(number, typeof number);
console.log(number.toFixed(3), typeof number);
