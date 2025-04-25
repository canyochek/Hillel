function first(firstNumber) {
    let result = firstNumber
    return function(secondNumber) {
        result *= secondNumber;
        return result
    }
}
const num1 = first(Number(prompt()))
console.log(num1(Number(prompt())));







