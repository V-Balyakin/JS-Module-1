let positiveSleep = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), milliseconds);
    });
};

let addWithDelay = (firstNumber, secondNumber) => {
    if (firstNumber > 0 && secondNumber > 0) {
        return positiveSleep(1000).then((firstNumber, secondNumber) => (firstNumber + secondNumber));
    } else {
        return new Promise((resolve, reject) => {
            reject(console.log('Error! Some parameter is negative number!'));
        });
    }
};

console.log(addWithDelay(2, 5));
addWithDelay(-2, 5);