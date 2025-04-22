function getString(str) {
    const letters = str.split('')
    const result = []
    for (let i = 0; i <= letters.length; i++) {
        if (letters[i] == 'l' || letters[i] == 'd') {
            continue;
        }
        result.push(letters[i]);
    }
    return result
}

const resultFunction = getString(prompt());
console.log(resultFunction.join(""));