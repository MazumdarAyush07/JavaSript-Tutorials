//This is a tutorial on the local and session storage
console.log("This is a tutorial on the local and session storage");

localStorage.setItem("Name", "Ayush"); //Put new item in local storage
let name = localStorage.getItem("Name"); //retrieve item from local storage
console.log(name);

localStorage.clear(); //clear the entire local storage

localStorage.setItem("Name", "Ayush");
localStorage.setItem("Club", "Manchester United");
localStorage.setItem("City", "Kolkata");

localStorage.removeItem("City"); //removes a particular item from local storage

const fruits = ["Orange", "Apple", "Pineapple"];
localStorage.setItem("fruits", JSON.stringify(fruits)); //storing array in local storage
