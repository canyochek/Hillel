const form = document.querySelector(".inputInfo");
const giveInfo = form.elements["infoUserButton"];
const giveUserName = form.elements["infoUserName"];
const giveMessage = form.elements["infoUserMessage"];
const givePhone = form.elements["infoUserNumber"];
const giveEmail = form.elements["infoUserEmail"];
giveInfo.addEventListener('click', function() {
  const userName = giveUserName.value.trim();
  const checkUserName = /^[a-zA-Zа-яА-Я]+$/;
  if (checkUserName.test(userName)) {
    console.log(`Name - ${userName}`)
    giveUserName.placeholder = "Name"
    giveUserName.classList.remove("errorResult")
  } else {
    giveUserName.placeholder = "Введіть своє ім'я"
    giveUserName.value = "";
    giveUserName.classList.add("errorResult")
  }

  const userMessage = giveMessage.value.trim();
  const checkMessage = /^.{5,}$/
  if (checkMessage.test(userMessage)) {
    console.log(`Message: ${userMessage}`)
    giveMessage.placeholder = "Message"
    giveMessage.classList.remove("errorResult")
  } else {
    giveMessage.placeholder = "Введіть мінімум 5 символів"
    giveMessage.value = "";
    giveMessage.classList.add("errorResult")
  }

  const userPhone = givePhone.value.trim();
  const checkPhone = /^\+38\d{10}$/
  if (checkPhone.test(userPhone)) {
    console.log(`Phone: ${userPhone}`)
    givePhone.placeholder = "Phone"
    givePhone.classList.remove("errorResult")
  } else {
    givePhone.placeholder = "Номер починається з +38 без пробілів"
    givePhone.value = "";
    givePhone.classList.add("errorResult")
  }

  const userEmail = giveEmail.value.trim();
  const checkEmail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/
  if (checkEmail.test(userEmail)) {
    console.log(`Email: ${userEmail}`)
    giveEmail.placeholder = "Email"
    giveEmail.classList.remove("errorResult")
  } else {
    giveEmail.placeholder = "Введіть правильну електронну пошту"
    giveEmail.value = "";
    giveEmail.classList.add("errorResult")
  }
})