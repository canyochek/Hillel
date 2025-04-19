// 5.4. Просте число чи ні

let number = Number(prompt());
let isPrime = true;

for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log(`${number} — просте число.`);
} else {
  console.log(`${number} — не просте число.`);
}