function getNumber() {
    let num = 0;
    return function(sum) {
        console.log(num + sum);
        num += sum;
        return num;
    }
}

const result = getNumber();

let input = prompt();

if (input !== null && input !== "" && Number(input) !== 0) {
    result(Number(input));
}

while (input !== null) {
    input = prompt();
    if (input === null || input === "" || Number(input) === 0) {
        break;
    }
    result(Number(input));
}
