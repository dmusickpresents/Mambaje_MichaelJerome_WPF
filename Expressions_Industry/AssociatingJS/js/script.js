//Michael Jerome Mambaje
//05-15-2014
//Expressions Industry

//Calculate how much they would pay Michael Jerome to develop a website base on $75 per hour, 5 hours a day for 2 weeks.
//Then calculate how much they're paying per min.

var firstName = "Michael Jerome";
var lastName = "Mambaje";
var fullName = firstName + " " + lastName;
const pay = 75;
var minutes = 60;
var dayTotal  = [75, 75, 75, 75, 75];
var total = dayTotal[0] + dayTotal[1] + dayTotal[2] + dayTotal[3] + dayTotal[4] + dayTotal[5];
var totalHours = 5 * 14;
totalHours = 70;
var totalPay = totalHours * pay;
totalPay = 5250;
var perMinute = minutes * totalHours;
perMinute = 4200;
var minutePay = 5250 / 4200;
console.log("They will pay " + fullName + " a total pay of " + totalPay + " for 2 weeks, " + total + " for 5 hours");





