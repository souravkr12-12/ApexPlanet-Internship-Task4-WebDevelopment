
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

document.addEventListener("DOMContentLoaded", loadTasks);

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return alert("Please enter a task!");

  const task = { text: taskText };
  addTaskToDOM(task);
  saveTaskToLocalStorage(task);
  taskInput.value = "";
}

function addTaskToDOM(task) {
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${task.text}</span>
    <div>
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    </div>
  `;

  li.querySelector(".edit").addEventListener("click", () => {
    const newText = prompt("Edit task:", task.text);
    if (newText) {
      li.querySelector("span").textContent = newText;
      updateTaskInLocalStorage(task.text, newText);
    }
  });

  li.querySelector(".delete").addEventListener("click", () => {
    li.remove();
    removeTaskFromLocalStorage(task.text);
  });

  taskList.appendChild(li);
}

function saveTaskToLocalStorage(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(addTaskToDOM);
}

function removeTaskFromLocalStorage(taskText) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const filtered = tasks.filter(t => t.text !== taskText);
  localStorage.setItem("tasks", JSON.stringify(filtered));
}

function updateTaskInLocalStorage(oldText, newText) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const updated = tasks.map(t =>
    t.text === oldText ? { text: newText } : t
  );
  localStorage.setItem("tasks", JSON.stringify(updated));
}
