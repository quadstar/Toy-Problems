// Write a function numberToEnglish, it should take a number and return the number as a string using English words.
var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};
function numberToEnglish (number) {
  if(number === 0){
    return 'zero';
  }
  var num = number.toString().split('').reverse().join('');
  var nums = [];
  while(num.length){
    var str = '';
    for(var i =  num.length < 3 ? num.length-1 : 2 ; i >= 0; i--){
      str += num[i];
    }
    nums.push(str);
    num = num.slice(3);
  }
  nums = nums.reverse()
  var result = ''
  nums.forEach(function(e,i,c){
    var res = ''

    for(var k = 0; k < e.length; k++){
      while(e.length < 3){
        e = '0' + e
      }
      if(e[k] === '0'){
        continue;
      }
      else if(k === 0){
        res += ' ' + numbersToWords[e[k]] + ' hundred';
      }
      else if(k === 1){
        if(e[k] === '1'){
          res += ' ' + numbersToWords[e[k]+e[k+1]];
          k++
        }
        else{
          res +=  ' ' + numbersToWords[e[k]+'0'] + ''        
        }
        
      }
      else if(k === 2){
        if(res !== ''){
          res +=  '-' + numbersToWords[e[k]];
        }
        else{
          res +=  ' ' + numbersToWords[e[k]];
        }
      }
    }
    
    var place = Math.pow(10,((nums.length-i-1)*3));
    if(place > 100){
      if(e !== '000'){
        res += ' ' + numbersToPlace[place];
      }
    }


    result += res
  })
  result = result.trim();
  return result;
}
