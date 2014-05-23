//Michael Jerome Mambaje
//05-22-2014
//Conditionals Wacky

alert("Limit of 10 pictures per person.");
var guest = prompt("How many guest are you having?");
var limitOfPictures = 500;

limitOfPictures = (guest < 50) ? "I am charging $150" : "I am charging $250";
console.log(limitOfPictures);