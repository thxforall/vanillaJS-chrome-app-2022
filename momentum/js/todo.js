const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const targetLi = event.target.parentElement;
  targetLi.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(targetLi.id));
  saveToDos();
}

function paintToDo(newTodDoObj) {
  const li = document.createElement("li");
  li.id = newTodDoObj.id;
  const span = document.createElement("span");
  span.innerText = newTodDoObj.text;
  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newTodDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newTodDoObj);
  paintToDo(newTodDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const getToDos = localStorage.getItem(TODOS_KEY);
if (getToDos !== null) {
  const parsedToDos = JSON.parse(getToDos);
  toDos = parsedToDos;
  parsedToDos.forEach((item) => paintToDo(item));
}
