const inputTodo = document.querySelector(".todolist__content-input");
const btnTodo = document.querySelector(".todolist__content-btn");
const listTodo = document.querySelector(".todo__list");

btnTodo.addEventListener("click", (event) => {
  if (inputTodo.value == "") {
    //alert(" add your task");
    inputTodo.classList.add("active_input");
  } else {
    creatTask();
    inputTodo.classList.remove("active_input");
    inputTodo.value = "";
  }
  setItem();
});

function creatTask() {
  const checkTodo = document.createElement("span");
  checkTodo.classList.add("todo__check");

  const valueOf = document.createElement("span");
  valueOf.classList.add("todo__item-span");
  valueOf.innerText = `${inputTodo.value}`;

  const li = document.createElement("li");
  li.classList.add("todo__item");

  const doneTodo = document.createElement("span");
  doneTodo.classList.add("todo__done");
  doneTodo.innerHTML = "-";

  li.append(checkTodo);
  li.append(valueOf);
  li.append(doneTodo);

  listTodo.append(li);
  setItem();
}

listTodo.addEventListener("click", (event) => {
  console.log(event);
  const t = event;
  if (
    event.target.tagName === "SPAN" &&
    event.target.classList.contains("todo__item-span")
  ) {
    event.target.closest("LI").classList.toggle("checked");
  } else if (event.target.classList.contains(".todo__check")) {
    event.target.parentElement.classList.toggle("checked");
  } else if (event.target.classList.contains("todo__done")) {
    event.target.parentElement.remove();
  }
  setItem();
});

function setItem() {
  localStorage.setItem("data", listTodo.innerHTML);
}
function getItem() {
  listTodo.innerHTML = localStorage.getItem("data");
}

getItem();
