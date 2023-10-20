//To take a set of links from the doc and print the link which contains a certain string.

let b = document.links;
let a = "google";
let c = Array.from(b);
c.forEach(function (element) {
  if (element.href.includes(a)) {
    console.log(element);
  }
});
