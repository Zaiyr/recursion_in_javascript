// A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
// subsequent number is the sum of the previous two.

// For example, the first five Fibonacci numbers are:
//   0 1 1 2 3

// If n were 4, your function should return 3; for 5, it should return 5.

// Write a function that accepts a number, n, and returns the nth Fibonacci
// number. Use a recursive solution to this problem; if you finish with time
// left over, implement an iterative solution.

// example usage:
// nthFibonacci(2); // => 1
// nthFibonacci(3); // => 2
// nthFibonacci(4); // => 3
// etc...

var num1 = 0;
var num2 = 1;
var Fib = 0;
var repeated = 0;

var nthFibonacci = function(n) {
  // Your code here
  if (repeated !==0){
    num1 = 0;
    num2 = 1;
    repeated = 0;
  }

  if(n !== 0){
    Fib = num1 + num2;
    num1 = num2;
    num2 = Fib;
    n--;
    console.log('num ', num1)
    nthFibonacci(n)
  }

  repeated = 1;
  return num1;
};

