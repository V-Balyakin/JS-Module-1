function isPositive(number) {
    return number >= 0;
}

function verifyNumbers (...args) {
    return args.every(isPositive);
}

function addWithDelay(...args) {
    if (verifyNumbers(...args) === true) {
        let positivePromise = new Promise(function (resolve, reject) {
            setTimeout(() => resolve(args.reduce((a, b) => a + b), 1000));
        });
        positivePromise.then(
            result => console.log(result),
            error => console.log(error)
        );
    } else {
        let negativePromise = new Promise(function (resolve, reject) {
            reject('Here are (one OR more) negative numbers');
        });
        negativePromise.then(
            result => console.log(result),
            error => console.log(error)
        );
    }
    return args.reduce((a, b) => a + b);
}

// second version

function addWithDelaySecond(...args) {
    return new Promise ((resolve, reject) => {
         args.every((arrayElement) => arrayElement > 0) ? setTimeout(() => {
            resolve(args.reduce((counter, currentElement) => counter + currentElement));
        }, 1000) : reject ('Here are (one OR more) negative numbers');
    });
}

addWithDelaySecond(4,8,-6).then (result => {
    console.log(result);
}).catch (error => {
    console.log(error);
});

addWithDelay(4,8,-6);
addWithDelay(4,8,13);
