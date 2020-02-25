const fs = require('fs'); // импортируем модуль fs в проект

function verifyPropertiesInJSONFile() {
    fs.readFile('jsonFile.json', (error, data) => {
        if (error) {
            console.error(error);
        } else {
            let object = JSON.parse(data);
            let wordForCompare = 'FiRst';
            let flagForCompare = true;
            let lengthForCompare = 8;
            let word = 'string';
            let counter = 0;
            let numberOfStringElements = 8;
            let array = object.parameters;
            let lowerBorder = 5;
            let upperBound = 13;

            let verifyFlag = typeof (object.flag); // boolean
            let verifyMyPromises = Array.isArray(object.myPromises); // true
            let verifyElement = typeof (object.element); // object
            let verifyScreenshot = (object.screenshot === null); // true
            let verifyElementText = typeof (object.elementText); // string
            let verifyAllElementsText = (object.allElementsText.indexOf('const') !== -1); // true

            let verifyCounter = object.counter > 10; // false
            let verifyCommon = object.config === 'Common'; // false
            let verifyConst = object.const.toUpperCase() === wordForCompare.toUpperCase(); // true
            let verifyParametersDraft = ((Array.isArray(array) === flagForCompare) && (array.length === lengthForCompare)); // предварительно TRUE
            if (verifyParametersDraft) {
                array.forEach(element => {
                    if (typeof (element) === typeof (word)) {
                        counter++;
                    }
                });
            }
            let verifyParametersClean = (counter === numberOfStringElements); // true
            let verifyDescription = ((object.description.length > lowerBorder) && (object.description < upperBound)); // false

            console.log(verifyFlag, verifyMyPromises, verifyElement, verifyScreenshot, verifyElementText, verifyAllElementsText);
            console.log(verifyCounter, verifyCommon, verifyConst, verifyParametersClean, verifyDescription);
        }
    });
}

verifyPropertiesInJSONFile();

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