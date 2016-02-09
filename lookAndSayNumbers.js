/* 
Given a number n >= 1, write a function that returns the nth number in the look-and-say sequence as a string.

*/

function lookAndSay (n) {
  var index = 1;
  var string = '1';
  while(index<n){
    var combo = 1;
    var result = '';
    var storage = [];
    for(var i = 0; i < string.length; i++){
      if(i===0){
        if(string.length === 1){
          result = '11';
        }
        continue;
      }
      if(string.charAt(i) !== string.charAt(i-1)){
        storage.push([combo, string.charAt(i-1)]);
        combo =1;
      }
      if(string.charAt(i) === string.charAt(i-1)){
        combo++;
      }
      if(i === string.length-1){
        storage.push([combo, string.charAt(i)]);
      }

    }
    for(var k = 0; k < storage.length; k++){
      result += storage[k][0];
      result += storage[k][1]; 
    }
    string = result;
    index++;
  }
  return string;
}