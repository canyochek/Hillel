const container = document.querySelector(".button-container");

container.addEventListener("click", function(event) {
  const clickedBtn = event.target;

  if (clickedBtn.classList.contains("btn")) {
    const number = clickedBtn.dataset.btn;
    console.log(`Ви натиснули кнопку ${number}`);
  }
});