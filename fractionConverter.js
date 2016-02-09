/*
Write a function that takes a number as its argument and returns a string 
that represents that number’s simplified fraction.
Whole numbers and mixed fractions should be returned as improper fractions.
*/


function fractionConverter (number) {
  if(number.toString().indexOf('.') === -1){
    return number.toString() + '/1';
  }

  var num = [number, 1];
  var length = number.toString().length;

  var mult = Math.pow(10, length);

  num.forEach(function(e,i,c){
    num[i] = e * mult;
    num[i] = Math.floor(num[i])
  });
  var gcd = function(a, b) {
    if ( ! b) {
        return Math.abs(a);
    }

    return gcd(b, a % b);
  };
  
  var dog = gcd(num[0], num[1]);
  while(dog !== 1){
    num.forEach(function(e,i,c){
      num[i] = Math.round(e / dog);
    });
    dog = gcd(num[0], num[1]);
  };
  return num[0].toString() + '/' + num[1].toString();
}
