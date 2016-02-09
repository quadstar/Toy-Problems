// Given an array of unique words, find the word that contains the greatest number of other words. A word must be at least two letters long. Try to find a solution in O(n) time.
function nestedWordCount (wordList) {
  var longest = [null, 0];
  for(var i = 0; i < wordList.length; i++){
    var counter = 0; 
    var str = wordList[i].toLowerCase();
    for(var j = 0; j < wordList.length; j++){
      if(str.includes(wordList[j].toLowerCase())){
        counter++;
      }
    }
    if(counter > longest[1]){
      longest[0] = wordList[i];
      longest[1] = counter;
    }
  }
  return longest[0];
}