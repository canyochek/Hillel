"use strict";

var $form = $('.info-exercise');
var $textExercise = $form.find('[name="exercise"]');
var $addTextExercise = $form.find('[name="btn-add"]');
var $list = $(".list-exercise");
function getItems() {
  return JSON.parse(localStorage.getItem("myList")) || [];
}
function saveItems(items) {
  localStorage.setItem("myList", JSON.stringify(items));
}
function renderList() {
  $list.empty();
  var savedItems = getItems();
  savedItems.forEach(function (item, index) {
    var $li = $("<li></li>").css("cursor", "pointer");
    var $checkBoxExercise = $('<input type="checkbox">').prop("checked", item.done);
    var $newExercise = $("<span></span>").text(item.text);
    if (item.done) {
      $newExercise.css("text-decoration", "line-through");
    }
    var $wrapper = $('<div class="left-content"></div>').append($checkBoxExercise, $newExercise);
    var $deleteBtn = $('<button type="button"><span>Видалити</span></button>');
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
      var myModal = new bootstrap.Modal(document.getElementById('myModal'));
      myModal.show();
      $('#myModal .modal-title').text(item.text);
    });
  });
}
$addTextExercise.on('click', function () {
  var value = $textExercise.val().trim();
  if (value !== "") {
    var savedItems = getItems();
    savedItems.push({
      text: value,
      done: false
    });
    saveItems(savedItems);
    $textExercise.val("");
    renderList();
  } else {
    alert("Введіть завдання!");
  }
});
renderList();
