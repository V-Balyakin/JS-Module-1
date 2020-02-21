function countOfTodayTime () {
    let midnigntTime = new Date (2019, 01, 21);
    let currentTime = new Date (2019, 01, 21, 12, 46, 30, 0);
    let transformToSeconds = 1000;
    return (currentTime - midnigntTime)/transformToSeconds;
}

console.log(countOfTodayTime());