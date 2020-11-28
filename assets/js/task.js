"use strict";
const state = [];

const root = document.getElementById("root");
const form = document.getElementById("form");
const currentView = document.getElementById("currentView");
const list = document.getElementById("list");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
//task1
input.addEventListener("input", (event) => {
  currentView.textContent = input.value;
});

form.addEventListener("submit", (event) => {
  const {
    target: {
      input: { value },
    },
  } = event;

  event.preventDefault();

  state.push(value);

  const li = createListItem({
    value,
    children: [
      createButton({ value, text: "Delete" }),
      createButton({
        value,
        text: "view data-*",
        onClick: ({ target: { dataset } }) => console.log(dataset),
      }),
    ],
  });

  list.append(li);

  event.target.reset();
});

/**
 *
 * @param {object} props
 * @param {string} props.value
 * @param {string} props.text
 * @param {Function} props.onClick
 * @returns {HTMLButtonElement} btn
 */
function createButton({
  value,
  text,
  onClick = () => {
    console.log("detached handler");
  },
}) {
  const btn = document.createElement("button");

  btn.onclick = onClick;
  btn.textContent = text;
  btn.dataset.value = value;

  return btn;
}

/**
 *
 * @param {object} props
 * @param {string} props.value
 * @param {Node[]} props.children
 * @param {Function} props.onClick
 * @returns {HTMLLIElement} li
 */
function createListItem({ value, children, onClick = () => {} }) {
  const li = document.createElement("li");
  li.onclick = onClick;
  li.append(document.createTextNode(value), ...children);

  return li;
}

function btnHandler(event) {
  const {
    target: {
      dataset: { value },
    },
  } = event;
  state.splice(state.indexOf(value), 1);
  event.target.parentNode.remove();
}
