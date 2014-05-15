//Michael Jerome Mambaje
//05-13-2014
//Expressions Worksheet

//Calculate Sparky'\s human years in dog years.

//var humanYears = 1; //1 human years in dog age is equivalent to 7.
var dogYears = 7; //dog age is 7 times faster than human age.
var humanAge = 3; //Sparky'\s actual human age.
var dogAge = humanAge * dogYears; //multiply the humanAge to dogYears to get the actual dogYears.
console.log("Sparky\'s actual dog age is" + " " + dogAge);

//Calculate how many slices of pizza each person ate at the party.

var pizzaOrdered = 3; //Total boxes of pizzas ordered.
const pizzaSlices = 8; //Slices of pizzas in each boxes.
var partyGoer = 10; //Number of people at party.
var slices = pizzaOrdered * pizzaSlices / partyGoer; //Number of pizzas ordered multiply by slices of pizza and divide it by party people.
console.log("Each person ate " + slices + " slices of pizza at the party.");

//Calculate the total amount spent on groceries over 5 weeks, and the average spent per week.

var shoppingBills = [83, 85, 75, 80, 85]; //0,1,2,3,4
var totalAmount = shoppingBills[0] + shoppingBills[1] + shoppingBills[2] + shoppingBills[3] + shoppingBills[4];
var weeklyAverage;
weeklyAverage = 85; // Weekly average.
console.log("I have spent a total amount of " + totalAmount + " on groceries over 5 weeks." +
    "That is an average of " + weeklyAverage + " per week");

//Calculate the original price of the item, the discounted price, final price with tax and without tax.

var originalPrice = 299; //Original price of the item.
var discountPercentage = 150; //Percentage discount of the item.
const salesTax = 0.075; //Sales tax.
var phrase = 'Harman/Kardon home theater receiver'
var finalPrice = originalPrice - discountPercentage; //original price subtract discount percentage to get the amount.
noTaxed = 149; //final untaxed price after discount.
var finalAmount = noTaxed * salesTax; // multiply final price of the item to sales tax to get the amount with tax.
finalAmount = 160.175; //amount with tax.
console.log("The receiver was originally " + originalPrice + ", but after a " + discountPercentage + " discount, " +
    "it is now " + finalPrice + " without tax, and " + finalAmount + " with tax.");

