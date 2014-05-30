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

var planeTaxiTotal;
var driveCommuteTotal;

if(planeTaxiTotal > driveCommuteTotal){
    console.log("We will fly going to Vegas!");

}else{
    console.log("We will drive going to Vegas");
}