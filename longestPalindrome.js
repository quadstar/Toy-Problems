/*
Implement a function that finds the longest palindrome in a given string.
For example, in the string “My dad is a racecar athlete”, the longest palindrome is “a racecar a”. 
Count whitespaces as valid characters. Other palindromes in the above string include “dad”, “ete”, “ dad “ 
(including whitespace on each side of dad).
*/

function longestPalindrome (string) {
  var result = '', left, right;
  for(var i = 0; i < string.length; i++){
    if(string[i-1] === string[i+1]){
      var pal = getPal(i-1, i+1, string[i-1]+string[i]+string[i+1]);
      if(pal.length > result.length) result = pal
    }
    if(string[i-1] === string[i]){
      var pal = getPal(i-1, i, string[i-1]+string[i]);
      if(pal.length > result.length) result = pal
    }
    if(string[i] === string[i+1]){
      var pal = getPal(i, i+1, string[i]+string[i+1]);
      if(pal.length > result.length) result = pal
    }
  }
  function getPal(l,r,c){
    l--
    r++
    while(l !== -1 || r !== string.length){
      if(string[l] === string[r]){
        c = string[l] + c + string[r];l--;r++
      }
      else{
        break;
      }
    }
    return c;
  }
  return result;
}
