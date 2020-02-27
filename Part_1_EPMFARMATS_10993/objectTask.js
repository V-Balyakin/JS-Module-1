function sortHappinessProperties() {
    let happiness = {
        smile: 8,
        soulFeelings: 10,
        mood: 9,
        altruism: 7,
        creativity: 6
    };
    let sortedPropertyNames = [];
    let indicatorOfHappiness = new Map(Object.entries(happiness).sort((key, value) => value[1] - key[1]));
    for (let [key, value] of indicatorOfHappiness) {
        sortedPropertyNames.push(key);
    }
    return sortedPropertyNames;
}

function sortHappinessPropertiesSecondVersion () {
    let happinessSecondVersion = {
        8: "smile",
        10: "soulFeelings",
        9: "mood",
        7: "altruism",
        6: "creativity"
    };
    let arrayWithProperties = [];
    for (let property in happinessSecondVersion) {
        arrayWithProperties.push(property);
    }
    let sortedArray = arrayWithProperties.reverse();
    let listOfProperties = [];
    sortedArray.forEach((item) => listOfProperties.push(happinessSecondVersion[item]));
    return listOfProperties;
}

console.log(sortHappinessProperties());
console.log(sortHappinessPropertiesSecondVersion());