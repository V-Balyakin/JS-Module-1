function multiplyThreeGreatestElementsInArray() {
    let array = [],
        arraySize = 10,
        multiplier = 50,
        borderForCount = 3,
        multiplyOfThreeGreatestNumbers = 1;
    for (let i = 0; i < arraySize; i++) {
        array[i] = Math.floor(Math.random() * multiplier);
    }
    array.sort((a, b) => a - b);
    for (let j = arraySize - 1; j >= arraySize - borderForCount; j--) {
        multiplyOfThreeGreatestNumbers *= array[j];
    }
    return (multiplyOfThreeGreatestNumbers);
}

console.log(multiplyThreeGreatestElementsInArray());