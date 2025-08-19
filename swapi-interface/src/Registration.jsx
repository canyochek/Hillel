import React, { useState } from "react";

export default function Registration() {
  const [formData, setFormData] = useState({
    infoUserName: "",
    infoUserMessage: "",
    infoUserNumber: "",
    infoUserEmail: "",
  });

  const [errors, setErrors] = useState({});

  const validators = {
    infoUserName: {
      regex: /^[a-zA-Zа-яА-Я]+$/,
      error: "Введіть своє ім'я",
    },
    infoUserMessage: {
      regex: /^.{5,}$/,
      error: "Введіть мінімум 5 символів",
    },
    infoUserNumber: {
      regex: /^\+38\d{10}$/,
      error: "Номер починається з +38 без пробілів",
    },
    infoUserEmail: {
      regex: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
      error: "Введіть правильну електронну пошту",
    },
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const newErrors = {};
    Object.keys(validators).forEach((field) => {
      if (!validators[field].regex.test(formData[field])) {
        newErrors[field] = validators[field].error;
      }
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Дані форми:", formData);
      alert("Форма успішно відправлена!");
    }
  };

  return (
    <div className="container">
      <form className="inputInfo" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="infoUserName"
          placeholder="Ім'я"
          value={formData.infoUserName}
          onChange={handleChange}
          className={errors.infoUserName ? "errorResult" : ""}
        />
        {errors.infoUserName && <p>{errors.infoUserName}</p>}

        <textarea
          name="infoUserMessage"
          placeholder="Повідомлення"
          value={formData.infoUserMessage}
          onChange={handleChange}
          className={errors.infoUserMessage ? "errorResult" : ""}
        />
        {errors.infoUserMessage && <p>{errors.infoUserMessage}</p>}

        <input
          type="text"
          name="infoUserNumber"
          placeholder="Номер телефону"
          value={formData.infoUserNumber}
          onChange={handleChange}
          className={errors.infoUserNumber ? "errorResult" : ""}
        />
        {errors.infoUserNumber && <p>{errors.infoUserNumber}</p>}

        <input
          type="email"
          name="infoUserEmail"
          placeholder="Електронна пошта"
          value={formData.infoUserEmail}
          onChange={handleChange}
          className={errors.infoUserEmail ? "errorResult" : ""}
        />
        {errors.infoUserEmail && <p>{errors.infoUserEmail}</p>}

        <input
          type="button"
          name="infoUserButton"
          value="Відправити повідомлення"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}



