function verifyJSONFile() {
    const fs = require('fs');
    const jsonFile = fs.readFileSync('jsonFile.json');
    const object = JSON.parse(jsonFile);
    let wordForCompare = 'FiRst',
        flagForCompare = true,
        lengthForCompare = 8,
        word = 'string',
        counter = 0,
        numberOfStringElements = 8,
        lowerBound = 5,
        upperBound = 13,
        numberForCompare = 10,
        counterOfMistakes = 0,
        quantityOfFields = 0;
    const verifyFlag = (parameter) => {
            return typeof parameter == 'boolean';
        },
        verifyMyPromises = (myPromises) => {
            return Array.isArray(myPromises);
        },
        verifyElement = (element) => {
            return element instanceof Object;
        },
        verifyScreenshot = (screenshot) => {
            return Object.is(screenshot, null);
        },
        verifyElementText = (elementText) => {
            return typeof (elementText) == 'string';
        },
        verifyAllElementsText = (allElementsText) => {
            return allElementsText.indexOf('const') !== -1;
        },
        verifyCounter = (counter, numberForCompare) => {
            return counter > numberForCompare;
        },
        verifyCommon = (config) => {
            return config === 'Common';
        },
        verifyConst = (word, wordForCompare) => {
            return word.toUpperCase() === wordForCompare.toUpperCase();
        },
        verifyParametersClean = (parameters) => {
            if ((Array.isArray(parameters) === flagForCompare) && (parameters.length === lengthForCompare)) {
                parameters.forEach(element => {
                    if (typeof (element) === typeof (word)) {
                        counter++;
                    }
                });
            }
            return counter === numberOfStringElements;
        },
        verifyDescription = (description) => {
            return (description.length > lowerBound) && (description.length < upperBound);
        };
    const verifyJSON = {
        flag: verifyFlag(object.flag),
        myPromises: verifyMyPromises(object.myPromises),
        element: verifyElement(object.element),
        screenshot: verifyScreenshot(object.screenshot),
        elementText: verifyElementText(object.elementText),
        allElementsText: verifyAllElementsText(object.allElementsText),
        counter: verifyCounter(object.counter, numberForCompare),
        config: verifyCommon(object.config),
        constParameter: verifyConst(object.const, wordForCompare),
        parameters: verifyParametersClean(object.parameters),
        description: verifyDescription(object.description)
    };
    fs.writeFileSync('jsonFileErrors.txt', 'The condition is not satisfied in the element: \n');
    for (let key in verifyJSON) {
        quantityOfFields = Object.keys(verifyJSON).length;
        if (verifyJSON[key] == true) {
            counterOfMistakes++;
        } else {
            for (let item in object) {
                if (key == item) {
                    fs.appendFileSync('jsonFileErrors.txt', key + ': ' + object[item] + '\n ');
                }
            }
        }
    }
    let result = counterOfMistakes === quantityOfFields ? 'All is OKAY' : 'See file jsonFileErrors.txt';
    console.log(result);
}

verifyJSONFile();
// "flag" - boolean
// 	"myPromises" - array
// 	"element" - object
// 	"screenshot" - null
// 	"elementText" - string
// 	"allElementsText" - contain "const" in string
// 	"counter" - more than 10
// 	"config" - equal "Common"
// 	"const" - equal "FiRst" (case insensitive)
// 	"parameters" - array with length 8 and all elements are string
// 	"description" - string with length more than 5 but less than 13