/* 
Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.

Your function should return the common characters in the same order that they appear in the first argument. Do not return duplicate characters and ignore whitespace in your returned string.
*/


commonCharacters = function(string1, string2){
  var dog = {}
  var result = {};
  string2.split('').forEach((d,o,g)=>{
    dog[d] = true;
  });
  string1.split('').forEach((d,o,g)=>{
    if(dog[d] && d !== ' '){
      result[d] = d;
    }
  })
  var woof = '';
  for(var key in result){
    woof += key;
  }
  return woof;
};

