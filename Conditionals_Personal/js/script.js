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
     console.log("We can't go to Hawaii.");
}else{
    console.log("We can go to Hawaii.");

    alert(paycheckPlusSavings - billsToPayThisMonth - priceForVacation);


}


