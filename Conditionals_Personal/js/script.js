//Michael Jerome Mambaje
//05-22-2014
//Conditionals Personal

alert("To Hawaii or not?");

//Prompts
var paycheckPlusSavings = prompt("How much is your paycheck this month?");
var priceForVacation = prompt("How much is vacation package for Hawaii?");
var billsToPayThisMonth = prompt("How much is total bills for this month?");

//If and Else
if(billsToPayThisMonth > priceForVacation){
     console.log("You can't go to Hawaii!"); //No Hawaii!
}else{
    console.log("You can go to Hawaii!"); //Mahalo!
//Alert for pocket money or money left after calculations.
    alert(paycheckPlusSavings - billsToPayThisMonth - priceForVacation + " is your pocket money!");


}


