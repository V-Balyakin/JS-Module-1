function countOfTodayTime() {
    let
        today = new Date(),
        secondsInMinute = 60,
        secondsInHour = 3600;
    const
        currentTime = today.getHours() * secondsInHour + today.getMinutes() * secondsInMinute + today.getSeconds();
    return currentTime;
}

console.log("Quantity of seconds from midnight till now: " + countOfTodayTime());