//Michael Jerome Mambaje
//05-22-2014
//Conditionals Wacky

alert("Limit of 10 pictures per person.");
var guest = prompt("How many guest are you having?");


var chargeIfLessThan50 = 150;
var chargeIfMoreThan50 = 250;
limitOfPictures = (guest < 50) ? "I am charging $" + chargeIfLessThan50 + "" : "I am charging $" + chargeIfMoreThan50
+ "";
console.log(limitOfPictures);

var answerYes = "Yes";
var answerNo = "No";
var nameOnPictures = prompt("would you like to put a title on your pictures?");
if(answerYes === true && answerNo === false){
    prompt("please input the name of the title");
    console.log("Good Title!");
}else{

    console.log("We'll decide for you!");
}