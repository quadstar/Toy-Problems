// Given a string, remove any characters that are not unique from the string.

function onlyUnique (str) {
  var storage = {}, result = '';
  for(var i = 0; i < str.length; i++){
    var letter = str.charAt(i);
    if(!storage[letter]) storage[letter] = 1;
    else{
      storage[letter]++;
    }
  }
  for(var key in storage){
    if(storage[key] === 1){
    result += key;
    }
  }
  return result;
}
