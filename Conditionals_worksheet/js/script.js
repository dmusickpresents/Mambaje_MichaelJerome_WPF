//Michael Jerome Mambaje
//05-22-2014
//Conditionals worksheet

var mpg = 45;
var tankReading = 30;
var gasCapacity = prompt("Enter your gas capacity:");

if(tankReading > mpg){

    console.log("You can make it without stopping for gas!");
}else{

    console.log("You only have " + gasCapacity + " gallons of gas in your tank," +
        "better get gas now while you can!");
}
