"use strict";
const input = document.getElementById("input");
const list = document.getElementById("list");
const item = document.getElementById("item");
const div = document.getElementById("div");

function handler(event) {
  console.log(event.currentTarget.tagName);
}
/* 
list.addEventListener("click", handler, {
  capture: true, // погружение события
});

item.addEventListener("click", handler, true);
div.addEventListener("click", handler, true);
*/

list.addEventListener("click", (event) => {
  const {
    target: { tagName, id },
    target,
  } = event;

  if (target === div) {
    console.log(target.textContent);
    arr.push(target.textContent.trim());
  }

  if (tagName === "LI") {
    // data-*
    console.log(target.dataset);
  }
});

document.getElementById("counter").addEventListener("click", (event) => {
  const {
    ctrlKey,
    shiftKey,
    target: { textContent },
    target,
  } = event;

  console.dir(event);

  if (shiftKey) {
    target.textContent = 0;
    return;
  }

  if (ctrlKey) {
    if (Number(textContent) > 0) {
      target.textContent = Number(target.textContent) - 1;
    }
    return;
  }

  target.textContent = Number(target.textContent) + 1;
});
