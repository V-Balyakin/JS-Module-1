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
console.log(sortHappinessProperties());