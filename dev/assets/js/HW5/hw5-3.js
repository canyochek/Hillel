// 5.3. Пошук потрібних чисел

const num = Number(prompt());
for (let i = 1; i <= 100; i++) {
  if (i ** 2 <= num) {
    console.log(i);
  }
}