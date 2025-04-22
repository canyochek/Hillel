function getDifferentTypes(data) {
    const elements = data.split(',');
    const numberElements = [];
    let sum = 0;
    
    for (let i = 0; i < elements.length; i++) {
        if (isNaN(elements[i])){
            continue;
        }
        numberElements.push(Number(elements[i]));
        sum += Number(elements[i]);
    }

    const result = sum / numberElements.length;
    return result;
}

const resultFunction = getDifferentTypes(prompt());
console.log(resultFunction);
    