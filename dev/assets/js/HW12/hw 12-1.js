const enterLink = document.querySelector(".btnLink");
const activateLink = document.querySelector(".btnActivateLink");

let savedLink = ""; 

function isValidURL(link) {
  try {
    new URL(link);
    return true;
  } catch (_) {
    return false;
  }
}

function handleEnterClick() {
  let link = prompt("Введіть посилання:");

  while (link !== null && !isValidURL(link)) {
    link = prompt("Некоректне посилання. Спробуйте ще раз:");
  }

  if (link !== null) {
    savedLink = link;
    activateLink.disabled = false;
  }
}

function handleActivateClick() {
  if (savedLink) {
    window.location.href = savedLink;
  }
}

enterLink.addEventListener("click", handleEnterClick);
activateLink.addEventListener("click", handleActivateClick)