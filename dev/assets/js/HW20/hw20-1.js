const $form = $('.info-exercise');
const $textExercise = $form.find('[name="exercise"]');
const $addTextExercise = $form.find('[name="btn-add"]');
const $list = $(".list-exercise");

function getItems() {
  return JSON.parse(localStorage.getItem("myList")) || [];
}

function saveItems(items) {
  localStorage.setItem("myList", JSON.stringify(items));
}

function renderList() {
  $list.empty(); 
  const savedItems = getItems();

  savedItems.forEach((item, index) => {
    const $li = $("<li></li>").css("cursor", "pointer");

    const $checkBoxExercise = $('<input type="checkbox">')
      .prop("checked", item.done);

    const $newExercise = $("<span></span>")
      .text(item.text);

    if (item.done) {
      $newExercise.css("text-decoration", "line-through");
    }

    const $wrapper = $('<div class="left-content"></div>')
      .append($checkBoxExercise, $newExercise);

    const $deleteBtn = $('<button type="button"><span>Видалити</span></button>');

    $li.append($wrapper, $deleteBtn);
    $list.append($li);

    $checkBoxExercise.on("change", function () {
      savedItems[index].done = $(this).prop("checked");
      saveItems(savedItems);
      renderList();
    });

    $deleteBtn.on("click", function (e) {
      e.stopPropagation();
      savedItems.splice(index, 1);
      saveItems(savedItems);
      renderList();
    });

    $li.on("click", function () {
      const myModal = new bootstrap.Modal(document.getElementById('myModal'));
      myModal.show();
      $('#myModal .modal-title').text(item.text); 
    });
  });
}

$addTextExercise.on('click', function () {
  const value = $textExercise.val().trim();
  if (value !== "") {
    const savedItems = getItems();
    savedItems.push({ text: value, done: false });
    saveItems(savedItems);
    $textExercise.val("");
    renderList();
  } else {
    alert("Введіть завдання!");
  }
});

renderList();