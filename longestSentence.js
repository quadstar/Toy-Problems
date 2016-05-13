function longestSentence(S) {
  var result = 0;
  var sentences = sentenceSplit(S);
  sentences.forEach(function(e){
    var wordCount = e.trim()
                    .replace(/  +/g,' ')
                    .split(' ')
                    .filter(function(e){ return e !== ' ' && e !== '';})
                    .length;
    if(wordCount > result){
      result = wordCount;
    }
  });
  return result;
}

function sentenceSplit(str){
  var sentences = [];
  var sentence = '';
  for(var i = 0; i < str.length; i++){
    if(str[i] === '!' || str[i] === '?' || str[i] === '.'){
      sentences.push(sentence);
      sentence = '';
    }
    else{
      sentence += str[i];
    }
  }
  sentences.push(sentence);
  return sentences;
}