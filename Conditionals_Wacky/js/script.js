//Michael Jerome Mambaje
//05-22-2014
//Conditionals Wacky

//Alert
alert("Limit of 10 pictures per person.");
var guest = prompt("How many guest are you having?");

//Variables
var chargeIfLessThan50 = 150;
var chargeIfMoreThan50 = 250;
limitOfPictures = (guest < 50) ? "I am charging $" + chargeIfLessThan50 + "" : "I am charging $" + chargeIfMoreThan50
+ "";
console.log(limitOfPictures);

//Variables and Prompt
var nameOnPictures = prompt(" Can you put a title on your pictures?");
if(nameOnPictures){
    console.log("Good Title!");
}else{
    console.log("We'll decide for you!");
}