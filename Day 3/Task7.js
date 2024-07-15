let year = 2024


let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
console.log("Year " + year + " is " + (isLeapYear ? "a Leap Year" : "not a Leap Year"));