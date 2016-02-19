/*
Given a roman numeral as input, write a function that converts the roman numeral to a number and outputs it.

When a smaller numeral appears before a larger one, it becomes a subtractive operation. 
You can assume only one smaller numeral may appear in front of larger one.

You should return "null" on invalid input.

*/

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

function translateRomanNumeral (romanNumeral) {
  var total = 0; 
  for(var i = 0; i < romanNumeral.length; i++){
    if(!DIGIT_VALUES[romanNumeral[i]]) return 'null'
    if(DIGIT_VALUES[romanNumeral[i]] < DIGIT_VALUES[romanNumeral[i+1]]){
      total -= DIGIT_VALUES[romanNumeral[i]]
    }
    else{
      total += DIGIT_VALUES[romanNumeral[i]];
    }
  }
  return total
}