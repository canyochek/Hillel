const form = document.querySelector('.info-exercise');
const textExercise = form.elements["exercise"];
const addTextExercise = form.elements["btn-add"];
const list = document.querySelector(".list-exercise");

function getItems() {
  return JSON.parse(localStorage.getItem("myList")) || [];
}

function saveItems(items) {
  localStorage.setItem("myList", JSON.stringify(items));
}

function renderList() {
  list.innerHTML = "";
  const savedItems = getItems();

  savedItems.forEach((item, index) => {
    const li = document.createElement("li");

    const checkBoxExercise = document.createElement("input");
    checkBoxExercise.type = "checkbox";
    checkBoxExercise.checked = item.done; 

    const newExercise = document.createElement("span");
    newExercise.textContent = item.text;

    if (item.done) {
      newExercise.style.textDecoration = "line-through";
    }

    const wrapper = document.createElement("div");
    wrapper.classList.add("left-content");
    wrapper.append(checkBoxExercise, newExercise);

    const deleteBtn = document.createElement("button");
    const textBtn = document.createElement("span");
    textBtn.textContent = "Видалити";
    deleteBtn.append(textBtn);
    deleteBtn.type = "button";

    li.append(wrapper, deleteBtn);
    list.append(li);

    checkBoxExercise.addEventListener("change", function () {
      savedItems[index].done = checkBoxExercise.checked;
      saveItems(savedItems);
      renderList();
    });

    deleteBtn.addEventListener("click", function () {
      savedItems.splice(index, 1); 
      saveItems(savedItems);       
      renderList();                
    });
  });
}

addTextExercise.addEventListener('click', function () {
  const value = textExercise.value.trim();
  if (value !== "") {
    const savedItems = getItems();
    savedItems.push({ text: value, done: false }); 
    saveItems(savedItems);
    textExercise.value = "";
    renderList();
  } else {
    alert("Введіть завдання!");
  }
});

renderList();