//Michael Jerome Mambaje
//05-15-2014
//Expressions Personal

//Calculate and divide the number of bottle water needed for 5 people for 3 days total volume per person.

var peopleDrinking = 5; //Number of people drinking water.
var days = 3; //Number of days staying.
var waterCases = 5; //Cases of water.
var bottleCount = 24; //Bottle counts for every cases.
var totalCount = waterCases * bottleCount; //Multiply the water cases with bottle count to get total.
totalCount = 120; //Total count for 5 cases.
var perPerson = totalCount / peopleDrinking; //Divide the total count of bottles by people drinking.
perPerson = 24; //Counts of water bottle per person for 3 days.
var perDay = perPerson / days; //Divide days of stay with water bottle per day.
perDay = 8; //Counts of water bottle per person for a day.
var volumeML = 500; //500ML in each bottle
var totalVolume = volumeML * perPerson;

console.log("Each person will have " + perDay + " bottles per day, and " +
    "" + perPerson + " bottles per " + days + " days."); //Final calculation.
