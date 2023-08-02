console.log("This is a discussion on array");
const marks = [34, 23, 24, 93, 73, 25];
const fruits = ["Orange", "Apple", "Pineapple"];
const mixed = ["Ayush", 89, [4, 9]];
const arr = new Array(23, 123, 21, "Orange");

console.log(arr);
console.log(mixed);
console.log(fruits);
console.log(marks);

console.log(fruits[0]);
console.log(arr.length);
console.log(Array.isArray("Ayush"));

arr[0] = "Ayush";
console.log(arr);

let val = marks.indexOf(34);
console.log(val);

marks.push(89); //append at last
marks.unshift(92); //append at beginning
console.log(marks);

marks.pop(); // removes the last element
console.log(marks);

marks.shift(); //removes the first element
console.log(marks);

marks.splice(1, 2); //starting from 1 remove 2 elements
console.log(marks);

marks.reverse();
console.log(marks);

let myobj = {
  name: "Ayush",
  club: "Manchester United",
  favorite: ["Rashford", "Bruno"],
};

console.log(myobj);
console.log(myobj.favorite);
console.log(myobj["favorite"]);
