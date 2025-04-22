function removeElement(array, item) {
    const numbers = array.split(' ');
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === item) {
            continue
        }
        result.push(numbers[i]);
    }
    return result
}
const resultFunction = removeElement(prompt(), prompt());
console.log(resultFunction);