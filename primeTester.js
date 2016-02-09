// A prime number is an integer greater than 1 that has no divisors other than itself and 1. Write a function that accepts a number and returns true if it’s a prime number, false if it’s not. The grader is looking at the efficiency of your solution (number of operations) as well as correctness! 

function primeTester (n) {
  if(n===2){return true;}
  if(n % 2 === 0 || n % 3 === 0 || n % 7 === 0 || n<2){return false;}
  var q = Math.sqrt(n);
  for (var i=5;i<=q;i+=6) {
    if ( q % i === 0 || q % (i+2) === 0)     return false;
  }
  return true;
}
