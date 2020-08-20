function sortHappinessProperties() {
    const happiness = {
            smile: 8,
            soulFeelings: 10,
            mood: 9,
            altruism: 7,
            creativity: 6
        },
        sortedPropertyNames = [],
        indicatorOfHappiness = new Map(Object.entries(happiness).sort((key, value) => value[1] - key[1]));
    for (let key of indicatorOfHappiness) {
        sortedPropertyNames.push(key);
    }
    return sortedPropertyNames;
}

function sortHappinessPropertiesSecondVersion() {
    const happinessSecondVersion = {
            8: "smile",
            10: "soulFeelings",
            9: "mood",
            7: "altruism",
            6: "creativity"
        },
        arrayWithProperties = [];
    for (let property in happinessSecondVersion) {
        arrayWithProperties.push(property);
    }
    const sortedArray = arrayWithProperties.reverse(),
        listOfProperties = [];
    sortedArray.forEach(item => listOfProperties.push(happinessSecondVersion[item]));
    return listOfProperties;
}

console.log(sortHappinessProperties());
console.log(sortHappinessPropertiesSecondVersion());