function verifyJSONFile() {
    const fs = require('fs');
    const jsonFile = fs.readFileSync('jsonFile.json');
    const objectFromJSONFIle = JSON.parse(jsonFile);
    let
        wordForCompare = 'FiRst',
        flagForCompare = true,
        lengthForCompare = 8,
        word = 'string',
        counter = 0,
        numberOfStringElements = 8,
        lowerBound = 5,
        upperBound = 13,
        numberForCompare = 10;
    const
        verifyFlag = (parameter) => typeof parameter == 'boolean',
        verifyMyPromises = (myPromises) => Array.isArray(myPromises),
        verifyElement = (element) => element instanceof Object,
        verifyScreenshot = (screenshot) => Object.is(screenshot, null),
        verifyElementText = (elementText) => typeof (elementText) == 'string',
        verifyAllElementsText = (allElementsText) => allElementsText.indexOf('const') !== -1,
        verifyCounter = (counter, numberForCompare) => counter > numberForCompare,
        verifyCommon = (config) => config === 'Common',
        verifyConst = (word, wordForCompare) => word.toUpperCase() === wordForCompare.toUpperCase(),
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
        verifyDescription = (description) => ((description.length > lowerBound) && (description.length < upperBound));
    const verifyJSON = {
        flag: verifyFlag(objectFromJSONFIle.flag),
        myPromises: verifyMyPromises(objectFromJSONFIle.myPromises),
        element: verifyElement(objectFromJSONFIle.element),
        screenshot: verifyScreenshot(objectFromJSONFIle.screenshot),
        elementText: verifyElementText(objectFromJSONFIle.elementText),
        allElementsText: verifyAllElementsText(objectFromJSONFIle.allElementsText),
        counter: verifyCounter(objectFromJSONFIle.counter, numberForCompare),
        config: verifyCommon(objectFromJSONFIle.config),
        constParameter: verifyConst(objectFromJSONFIle.const, wordForCompare),
        parameters: verifyParametersClean(objectFromJSONFIle.parameters),
        description: verifyDescription(objectFromJSONFIle.description)
    };
    fs.writeFileSync('jsonFileErrors.txt', 'The condition is not satisfied in the element: \n');
    const notValidKeys = {};
    for (let key in verifyJSON) {
        if (verifyJSON[key] === false) {
            notValidKeys[key] = objectFromJSONFIle[key];
        }
    }
    fs.appendFileSync('jsonFileErrors.txt', JSON.stringify(notValidKeys));
    let result = Object.entries(notValidKeys).length === 0 ? 'All is OKAY' : 'See file jsonFileErrors.txt';
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