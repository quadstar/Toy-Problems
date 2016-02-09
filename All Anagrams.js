/*
Given a single input string, write a function that produces all possible anagrams
of a string and outputs them as an array.
*/

function allAnagrams (string) {
  var results = [];
  var letters = string.split('');
  function permute(latters, strung){
    strung = strung || '';
    if(strung.length === string.length){
      results.push(strung);
      return;
    }
    var placedLetters = {};
    for(var l=0; l < latters.length; l++ ){
        if(placedLetters[latters[l]]){ 
          continue;
        }
        var tempStr = strung;
        tempStr += latters[l];
        placedLetters[latters[l]] = 1;
        
        var tempArr = latters.slice();
        tempArr.splice(l,1);
        
        permute(tempArr, tempStr);
    }
  }
  permute(letters);
  return results;
}
