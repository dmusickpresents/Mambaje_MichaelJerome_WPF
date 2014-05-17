//Michael Jerome Mambaje
//05-15-2014
//Expressions Industry

//Calculate how much they would pay Michael Jerome to develop a website base on $75 per hour, 5 hours a day for 2 weeks.
//Then calculate how much they're paying per min.

var firstName = "Michael Jerome";
var lastName = "Mambaje";
var fullName = firstName + " " + lastName;
const pay = 75; //Hourly rate.
var minutes = 60; //Minutes per hour.
var dayTotal  = [75, 75, 75, 75, 75]; //Arrays
var total = dayTotal[0] + dayTotal[1] + dayTotal[2] + dayTotal[3] + dayTotal[4]; //Arrays
var totalHours = 5 * 14; //Per day hourly multiplied by 2 weeks
totalHours = 70; //Total hours
var totalPay = totalHours * pay; //Total hours multiplied by $75 to get the final pay.
totalPay = 5250; //Total payment for 2 weeks.
var perMinute = minutes * totalHours; //Total hours of 70 multiplied by 60 minutes.
perMinute = 4200; //Total minutes for 2 weeks of work.
var minutePay = 5250 / 4200; //Total pay divided by total minutes to get the pay per 1 minute.
console.log("They will pay " + fullName + " a total pay of " + totalPay + " for 2 weeks, " + total + " for 5 hours, " +
     + minutePay + " per 1 minute. "); //Final calculations.





