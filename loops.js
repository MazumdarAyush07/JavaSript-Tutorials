console.log("This is a tutorial on loops");

//Loops: for, while, do-while

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let j = 12;
while (j <= 20) {
  console.log(j);
  j++;
}

let k = 22;
do {
  console.log(k);
  k++;
} while (k <= 30);

let x = 45;
while (x <= 60) {
  if (x === 53) {
    x++;
    continue;
  }
  console.log(x);
  x++;
}

let arr = [1, 2, 3, 4, 5, 6];
arr.forEach(function (ele) {
  console.log(ele);
});

let obj = {
  user: "Ayush Mazumdar",
  age: 21,
  type: "Hopeless Programmer",
  os: "Windows",
};

for (let key in obj) {
  console.log(`${key} of object is ${obj[key]}`);
}
