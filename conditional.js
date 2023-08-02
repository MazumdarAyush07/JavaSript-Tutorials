console.log("This is a tutorial on conditional statements");
const age = 19;
if (age >= 19) {
  console.log("You are old enough to vote");
} else if (age >= 65) {
  console.log("You are a senior citizen");
} else {
  console.log(`Sorry, you're not old enough yet`);
}

const vari = 25;
if (typeof vari !== "undefined") console.log("Vari is defined");
else console.log("vari is undefined");

let doesDrive = true;
if (doesDrive && age >= 18) console.log("You can drive");
else console.log("you cannot drive");

console.log(age == 45 ? "Age is 45" : "Age is not 45");

switch (age) {
  case 19:
    console.log("you are 19");
    break;
  case 20:
    console.log("you are 20");
    break;
  case 65:
    console.log("you are 65");
    break;

  default:
    console.log("you are unknown age");
    break;
}
