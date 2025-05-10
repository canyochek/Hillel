const btnElement = document.querySelector(".btn")
const originalText = btnElement.innerHTML;
const textElement = document.querySelector(".text")

btnElement.classList.add("btn-blue")
textElement.classList.add("text-red")

btnElement.addEventListener('click', function () {
  btnElement.innerHTML = btnElement.innerHTML === originalText ? "Змінити колір на червоний" : originalText;

  btnElement.classList.toggle("btn-red");
  btnElement.classList.toggle("btn-blue");

  textElement.classList.toggle("text-red");
  textElement.classList.toggle("text-blue");
});