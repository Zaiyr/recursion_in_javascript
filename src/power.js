// Given two integers -- a base and an exponent -- write a 
// recursive function that computes the exponent math and 
// returns the result.

// Exponent math is performed by multiplying the base by itself
// x number of times, where x is the exponent given.

// Examples:

// power(2, 2) => 4
// power(2, 4) => 16
// power(5, 2) => 25
// power(10, 3) => 1000

var totalPower = 1;
var repeatPower = 0;

var power = function(base, exponent) {
  // Your code here

  if(repeatPower !== 0){
    totalPower = 1;
    repeatPower = 0;
  }

  if(exponent !== 0){
    totalPower *= base;
    exponent--;
    power(base, exponent)
  }

  repeatPower = 1;
  return totalPower;
};