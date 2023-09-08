console.log("This is a tutorial on functions");

function greet(name) {
  console.log(`Happy Birthday ${name}`);
}

let name = "Ayush";

greet(name);

let obj = {
  user: "Ayush Mazumdar",
  game: function () {
    return "FM";
  },
};

console.log(obj.game());

const fruits = ["Orange", "Apple", "Pineapple"];
fruits.forEach(function (ele, index, array) {
  console.log(ele, index);
});
