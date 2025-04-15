// 4.2. Перевірка числа

const num = Number(prompt("Введіть число: "));
const lastNumber = num % 10;
const secondNumber = Math.floor((num % 100) / 10);
const firstNumber = Math.floor((num / 100));

 if (lastNumber === secondNumber && lastNumber === firstNumber && secondNumber === firstNumber) {
    console.log("Всі цифри однакові");
 } else if (lastNumber === secondNumber) {
    console.log("Друга цифра та остання рівні");
 } else if (lastNumber === firstNumber) {
    console.log("Перша цифра та остання рівні");
 } else if (firstNumber === secondNumber) {
    console.log("Перша цифра та друга рівні");
 } else {
    console.log("Цифри різні");
 }