// 5.2. Розрахунок валюти

let result = '';
for (let i = 10; i <= 100; i += 10) {
  const grivna = i * 26
  result += `${i} $ = ${i * 26} грн`;
  if (i < 100) {
    result +=  ', ';
  }
}
console.log(result);