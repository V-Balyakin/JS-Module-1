const fs = require('fs'); // импортируем модуль fs в проект
function verifyPropertiesInJSONFile() {
    fs.readFile('jsonFile.json', (error, data) => {
        if (error) {
            console.error(error);
        } else {
            let dataFromJsonFile = data.toString();
            console.log(dataFromJsonFile);
            let convertedDataInObject = JSON.parse(dataFromJsonFile);
            for (let item in convertedDataInObject) {
                console.log(convertedDataInObject[item]);
                // if ((typeof(convertedDataInObject[value]) === boolean) && (typeof(convertedDataInObject[item]) === boolean)) {
                //         console.log('OK');
                // }
            }
            let checkType = true;
        
            console.log("\n" + typeof(checkType));
            console.log(typeof(convertedDataInObject));
        }
    });
}

verifyPropertiesInJSONFile();
