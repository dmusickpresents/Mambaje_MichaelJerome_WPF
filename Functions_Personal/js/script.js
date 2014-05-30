//Michael Jerome Mambaje
//05-29-2014
//Functions Personal

//Ternary
var gasPrice = 3.99;
var denaliTankTotal = 26;
var totalGasPT = gasPrice * denaliTankTotal;
var carRentalTotal = 280;
var driveCommuteTotal = totalGasPT * carRentalTotal;
var planeTicket = 300;
var taxiTotal = 150;
var planeTaxiTotal = planeTicket + taxiTotal;

var vegasTrip;

vegasTrip = (planeTaxiTotal < driveCommuteTotal) ? "We will fly going to Vegas!" : "We will drive going to Vegas!";
console.log(vegasTrip);

//Else if
var planeBagAllowedLbs = 50;
var myLuggage = 51;
var removeClothing = 49.99;

if(myLuggage > planeBagAllowedLbs) {
    console.log("I can't check in my bags!");
}else if(myLuggage < removeClothing){
    console.log("I can check in, only if i remove some clothing.");
}else{
    console.log("I can check in my bags.");

}

//Anonymous Function
var calcTotMilesByCar = function(going, comingBack){
    var total = going + comingBack;
    return total;

}

var totalMiles = calcTotMilesByCar(546, 546);

console.log(totalMiles + " is the total miles going back and forth if we drive going to Vegas.");