    // 3.1 Перелік типів
const number = 24;
console.log(typeof number);

const bigNumber = 2n;
console.log(typeof bigNumber);

const text = "Hello";
console.log(typeof text);

let emptyValue;
console.log(typeof emptyValue); 

const truth = true; 
console.log(typeof truth);

const object = [1, 2, 3, 4];
console.log(typeof object);

function exampleFunction() {
}
console.log(typeof exampleFunction); 

const uniqueID = Symbol('description');
console.log(typeof uniqueID)

    // 3.2 Числа та рядки

const firstString = prompt();
const SecondString = prompt();
const LastString = prompt();
console.log(`${firstString}, ${SecondString}, ${LastString}`)

    // 3.3 Розкласти п'ятизначне число

let num = prompt();
let str = num.split("");
let result = str.join(" ");
console.log(result);