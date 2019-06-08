const toDoList = [];

let input = document.querySelector("input");
const form = document.querySelector("form");
let taskNumber = document.querySelector("h1 span");
let listItems = document.getElementsByClassName("task");
let ul = document.querySelector("ul");

const removeTask = e => {
  e.target.parentNode.remove();
  const index = e.target.parentNode.dataset.key;
  toDoList.splice(index, 1);
  taskNumber.textContent = listItems.length;
  renderList();
};

const addTask = e => {
  e.preventDefault();
  let titleTask = input.value;
  if (titleTask === "") return;
  const task = document.createElement("li");
  task.className = "task";
  task.innerHTML = titleTask + "<button>USUŃ</button>";
  toDoList.push(task);
  renderList();

  ul.textContent = "";
  toDoList.forEach((toDoElemnt, key) => {
    toDoElemnt.dataset.key = key;
    ul.appendChild(toDoElemnt);
  });
  ul.appendChild(task);
  input.value = "";
  taskNumber.textContent = listItems.length;
  task.querySelector("button").addEventListener("click", removeTask);
};
const renderList = () => {
  ul.textContent = "";
  toDoList.forEach((toDoElemnt, key) => {
    toDoElemnt.dataset.key = key;
    ul.appendChild(toDoElemnt);
  });
};
form.addEventListener("submit", addTask);
