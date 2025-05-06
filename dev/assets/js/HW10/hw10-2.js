const numbers = [1, 32, 2, 65, 11, 87, 10]
let newNumbers = []
for(const evenNumbers of numbers) {
    if (evenNumbers % 2 != 0) continue;
    newNumbers.push(evenNumbers);
}
console.log(newNumbers)