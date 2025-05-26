 const form = document.getElementById("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const messageInput = document.getElementById("message");
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const phoneError = document.getElementById("phone-error");
  const messageError = document.getElementById("message-error");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const message = messageInput.value.trim();

    let hasError = false;

    if (name === "") {
      nameError.textContent = "Введіть ім’я";
      hasError = true;
    } else {
      nameError.textContent = "";
    }

    if (email === "") {
      emailError.textContent = "Введіть email";
      hasError = true;
    } else if (!email.includes("@") || !email.includes(".")) {
      emailError.textContent = "Email повинен містити @ та крапку";
      hasError = true;
    } else {
      emailError.textContent = "";
    }

    if (phone === "") {
      phoneError.textContent = "Введіть номер телефону";
      hasError = true;
    } else if (!phone.startsWith("+380")) {
      phoneError.textContent = "Номер телефону має починатися з +380";
      hasError = true;
    } else {
      phoneError.textContent = "";
    }

    if (message.length < 5) {
      messageError.textContent = "Повідомлення має містити не менше 5 символів";
      hasError = true;
    } else {
      messageError.textContent = "";
    }

    if (!hasError) {
      console.log("Ім’я:", name);
      console.log("Email:", email);
      console.log("Телефон:", phone);
      console.log("Повідомлення:", message);

      alert("Форма успішно відправлена!");
      form.reset();
    }
  });