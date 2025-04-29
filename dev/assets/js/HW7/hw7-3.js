function firstNumber(initialNumber) {
    return function () {
        let number = initialNumber;
        for (let i = 0; i < 10; i++) {
            if (number >= 100) {
                return number;
            }
            number = Number(prompt("Введіть число більше за 100:"));
        }
        return number;
    }
}
const request = firstNumber(Number(prompt("Введіть число:")))(); 
console.log("Результат функції:", request);


