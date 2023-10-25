//This is a tutorial on Events
console.log("This is a tutorial on Events");

document.getElementById("head").addEventListener("click", function (e) {
  console.log("You clicked the head!");
  console.log(e);
  console.log(e.target);
  console.log(e.target.className);
  console.log(e.offsetX);
  console.log(e.offsetY);
});

document.getElementById("dummy").addEventListener("mouseover", function (e) {
  console.log("You hovered the dummy!");
  console.log(e);
  console.log(e.target);
  console.log(e.target.className);
  console.log(e.offsetX);
  console.log(e.offsetY);
});
