//Michael Jerome Mambaje
//05-29-2014
//Functions Personal

var gasPrice = 3.99;
var denaliTankTotal = 26;
var totalGasPT = gasPrice * denaliTankTotal;
var carRentalTotal = 280;
var driveCommuteTotal = totalGasPT * carRentalTotal;
var planeTicket = 300;
var taxiTotal = 150;
var planeTaxiTotal = planeTicket + taxiTotal;

var vegasTrip;

vegasTrip = (planeTaxiTotal > driveCommuteTotal) ? "We will drive going to Vegas!" : "We will fly going to Vegas!";
console.log(vegasTrip)