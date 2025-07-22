const form = document.querySelector(".inputInfo");
const giveInfo = form.elements["infoUserButton"];

function validateField(selector, checkUser, initialPlaceholder, errorMessage) {

  const field = form.elements[selector];
  const valueField = field.value.trim();

  if (checkUser.test(valueField)) {
    console.log(valueField)
    field.placeholder = initialPlaceholder
    field.classList.remove("errorResult")
  } else {
    field.placeholder = errorMessage
    field.value = "";
    field.classList.add("errorResult")
  }
}

giveInfo.addEventListener('click', function() {
  validateField("infoUserName", /^[a-zA-Zа-яА-Я]+$/, "Ім'я", "Введіть своє ім'я");
  validateField("infoUserMessage", /^.{5,}$/, "Повідомлення", "Введіть мінімум 5 символів");
  validateField("infoUserNumber", /^\+38\d{10}$/, "Номер телефону", "Номер починається з +38 без пробілів");
  validateField("infoUserEmail", /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/, "Електронна пошта", "Введіть правильну електронну пошту");
});