"use strict";

const rootDiv = document.getElementById("root");

//div.className = "divTest2";

rootDiv.classList.add("divTest");

rootDiv.addEventListener("click", (event) => {
  rootDiv.classList.toggle("divTest");
  rootDiv.classList.toggle("test");
  rootDiv.classList.toggle("divTest2");
});

/*
classList.
    toggle()   // on-off class
    add()      // add a class
    remove()   // remove a class
    contains() // check element class
    replace()  // replace one class to another
*/


