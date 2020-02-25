const fs = require('fs'); // импортируем модуль fs в проект
function printEvenStringsFromFile() {
    fs.readFile('Romeo and Juliet_cutted version.txt', 'utf-8', (error, data) => {
        if (error) {
            console.error(error);
        } else {
            console.log("I'm done read the file!\nEven strings below: \n");
            let arrayWithEvenStrings = fs.readFileSync('Romeo and Juliet_cutted version.txt', 'utf-8').toString().split("\n");
            let counter = 0;
            let divider = 2;
            for (let element in arrayWithEvenStrings) {
                if (arrayWithEvenStrings[element] !== ('' || '\r')) {
                    counter++;
                    if (counter % divider === 0) {
                        console.log(arrayWithEvenStrings[element]);
                    }
                }
            }
            console.log('\nTotal not-empty-strings in file: ' + arrayWithEvenStrings.length);
        }
    });
}

printEvenStringsFromFile();