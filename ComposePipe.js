/* 
Compose should return a function that is the composition of a 
list of functions of arbitrary length.
Each function is called on the return value of the function that follows. 

Pipe composes a series of functions and returns the resulting function.
Each function is called on the return value of the preceding function.

*/
var compose = function(){
    var barks = [...arguments];
    return function(woof){
      return barks.reduceRight((d,o,g,s) => {
        return o(d);
      }, woof);
    };
};

var pipe = function(){
  var barks = [...arguments];
    return function(woof){
      return barks.reduce((d,o,g,s) => {
        return o(d);
      }, woof);
    };
};