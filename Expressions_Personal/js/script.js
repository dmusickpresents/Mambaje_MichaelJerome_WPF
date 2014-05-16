

var peopleDrinking = 5; //Number of people drinking water.
var days = 3; //Number of days staying.
var waterCases = 5; //Cases of water used.
var bottleCount = 24; //Bottle counts for every cases.
var totalCount = waterCases * bottleCount;
totalCount = 120; //Total count for 5 cases.
var perPerson = totalCount / peopleDrinking;
perPerson = 24; //Counts of water bottle per person for 3 days.
var perDay = perPerson / days;
perDay = 8; //Counts of water bottle per person for a day.
console.log("Each person will have " + perDay + " bottles per day, and " +
    "" + perPerson + " bottles per " + days + " days.");
