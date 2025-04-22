function getString(str, words) {
    const letters = str.split('');
    const word = words.split('');
    const result = [];

    for (let i = 0; i < letters.length; i++) {
        if (!word.includes(letters[i])) {
            result.push(letters[i]);
        }
    }
    return result;
}

const resultFunction = getString(prompt(), prompt());
console.log(resultFunction.join(""));