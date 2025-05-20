const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");


addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="deleteBtn">Видалити</button>`;
    taskList.appendChild(li);
    taskInput.value = "";
  }
});


taskList.addEventListener("click", function (event) {
  if (event.target.classList.contains("deleteBtn")) {
    const li = event.target.parentElement;
    li.remove();
  }
});