//Michael Jerome Mambaje
//05-16-2014
//Expressions Wacky

//Calculate the total amount I gave to 10 people after winning the lottery, and how much money will be deducted to $20M.
//Whoever has the lowest amount must contact me for an additional amount of money received.

var person1 = 145234;
var person2 = 152345;
var person3 = 214256;
var person4 = 423556;
var person5 = 323552;
var person6 = 534673;
var person7 = 2023242;
var person8 = 1232425;
var person9 = 742898;
var person10 = 832452;

var total = (person1 + person2 + person3 + person4 + person5 + person6 + person7 +
    person8 + person9 + person10);

var moneyWon = 20000000;
var moneyLeft = moneyWon - total;

var areaCode = 408;
var firstPart = 655;
var secPart = 2155;

var cellNo = "(" + String(areaCode) + ")" + String(firstPart) + "-" + String(secPart);

var firstName = "Michael Jerome";
var lastName = "Mambaje";
var fullName = firstName + " " + lastName;

var additionalMoney = person1 * 2;

console.log(additionalMoney);
