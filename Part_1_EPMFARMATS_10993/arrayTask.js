function multiplyThreeGreatestElementsInArray () {
    let array = [];
    let arraySize = 10;
    let multiplier = 50;
    let borderForCount = 3;
    let multiplyOfThreeGreatestNumbers = 1;
    for (let i = 0; i < arraySize; i++) {
        array[i] = Math.floor(Math.random() * multiplier);
    }
    array.sort((firstNumber, secondNumber) => firstNumber - secondNumber);
    for (let j = 0; j < borderForCount; j++) {
        multiplyOfThreeGreatestNumbers = multiplyOfThreeGreatestNumbers * array[j];
    }
    return(multiplyOfThreeGreatestNumbers);
}

console.log(multiplyThreeGreatestElementsInArray());