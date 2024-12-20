let inputBox = document.querySelector(".input-task");
let listContainer = document.querySelector(".list-container");
let addBtn = document.querySelector(".add-btn");
let error = document.querySelector(".error");



showTask();

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("LI");
    li.innerHTML = inputBox.value;

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    listContainer.appendChild(li).appendChild(span);
  }

  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

addBtn.addEventListener("click", () => {
  addTask();
});
