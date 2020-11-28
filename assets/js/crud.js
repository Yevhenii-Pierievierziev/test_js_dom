"use strict";

//Read
const body = document.querySelector("body");

//Create

const container = document.createElement("div"); //create element

// Update

body.append(container, document.createElement("p")); // add to end 

container.insertBefore(document.createElement("a"));

body.appendChild(container); // add to end
body.prepend(container); // add to start


// Delete

container.remove(); // delete element
body.removeChild(container); // delete element
