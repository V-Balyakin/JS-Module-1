const fs = require('fs'),
    pathToJSON = 'jsonFile.json',
    pathToFileWithErrors = 'jsonFileErrors.txt';

function getObjectFromJSON() {
    const jsonFile = fs.readFileSync(pathToJSON);
    return JSON.parse(jsonFile);
}

function getDataForCompare() {
    return {
        wordForCompare: 'FiRst',
        flagForCompare: true,
        lengthForCompare: 8,
        word: 'string',
        counter: 0,
        numberOfStringElements: 8,
        lowerBound: 5,
        upperBound: 13,
        numberForCompare: 10,
        notValidKeys: {}
    };
}

function verifyKeyParametersInJSONFile(data, objectFromJSONFIle) {
    return (Array.isArray(objectFromJSONFIle.parameters) === data.flagForCompare) &&
        (objectFromJSONFIle.parameters.length === data.lengthForCompare) &&
        objectFromJSONFIle.parameters.every((element) => typeof element === 'string');
}

function getObjectWithVerifiedProperties() {
    const
        data = getDataForCompare(),
        objectFromJSONFIle = getObjectFromJSON();
    return {
        flag: (typeof (objectFromJSONFIle.flag) === 'boolean'),
        myPromises: Array.isArray(objectFromJSONFIle.myPromises),
        element: typeof objectFromJSONFIle.element === 'object' && !Object.is(objectFromJSONFIle.element, null),
        screenshot: Object.is(objectFromJSONFIle.screenshot, null),
        elementText: typeof (objectFromJSONFIle.elementText) === 'string',
        allElementsText: objectFromJSONFIle.allElementsText.includes('const'),
        counter: objectFromJSONFIle.counter > data.numberForCompare,
        config: objectFromJSONFIle.config === 'Common',
        constParameter: data.word.toUpperCase() === data.wordForCompare.toUpperCase(),
        parameters: verifyKeyParametersInJSONFile(data, objectFromJSONFIle),
        description: ((objectFromJSONFIle.description.length > data.lowerBound) && (objectFromJSONFIle.description.length < data.upperBound))
    };
}

function showResult() {
    fs.writeFileSync(pathToFileWithErrors, JSON.stringify(notValidKeys));
    let result = Object.entries(notValidKeys).length === 0 ? 'All is OKAY' : 'See file jsonFileErrors.txt';
    console.log(result);
}

function compareJSONFileAndExpectedResult() {
    const verifyJSON = getObjectWithVerifiedProperties();
    notValidKeys = getDataForCompare().notValidKeys;
    for (let key in verifyJSON) {
        if (!verifyJSON[key]) {
            notValidKeys[key] = getObjectFromJSON()[key];
        }
    }
    showResult();
}

compareJSONFileAndExpectedResult();