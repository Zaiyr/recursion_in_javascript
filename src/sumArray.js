// Given an array of integers, write a recursive function 
// that returns the sum of all itegers in the array.

// This type of problem is often solved using looping/iteration,
// but can also be solved recursively. If you want, you can
// first solve the problem using a loop and then refactor
// to use recursion.

// Remember to create a base case/exit condition to prevent 
// a stack overflow.

// Examples:

// sumArray([10, 20]) => 30
// sumArray([2, 4, 6, 8]) => 20
// sumArray([1, 2, 3, 4, 5]) => 15

var total = 0;
var repeat = 0;
var sumArray = function(arr) {
  // Your code here

  if (repeat != 0){
    repeat = 0;
    total = 0;
  }

  if(typeof arr !== 'object'){
    return arr[0];
  }

  if(arr.length !== 0){
    var int = arr.pop();
    total += int;
    sumArray(arr);
  }
  repeat = 1;
  return total;
};


