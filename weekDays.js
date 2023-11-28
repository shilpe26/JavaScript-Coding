/* You have been given days string (like "monday"), you have to determine if it 
is a "weekend" or a "weekday".*/

const weekList = {
    "monday": "weekday",
    "tuesday": "weekday",
    "wednesday": "weekday",
    "thursday": "weekday",
    "friday": "weekday",
    "saturday": "weekend",
    "sunday": "weekend",
}

const findWeekDay = (day) => {
    return weekList[day.toLowerCase()];
}

console.log(findWeekDay("monday"));
console.log(findWeekDay("Wednesday"));
console.log(findWeekDay("SUNDAY"));