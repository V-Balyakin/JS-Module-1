const fs = require('fs');
function printEvenStringsFromFile() {
    if (fs.existsSync('Romeo and Juliet_cutted version.txt')) {
        const arrayWithEvenStrings = fs.readFileSync('Romeo and Juliet_cutted version.txt', 'utf-8').toString().split("\r\n"),
            divider = 2,
            sortedArray = arrayWithEvenStrings.filter(string => string !== '');
        console.log('Even strings: \n');
        sortedArray.forEach(string => {
            if (sortedArray.indexOf(string) % divider !== 0) {
                console.log(string.trim());
            }
        });
        console.log('\nTotal not-empty-strings in file: ' + sortedArray.length);
    }
}
printEvenStringsFromFile();
