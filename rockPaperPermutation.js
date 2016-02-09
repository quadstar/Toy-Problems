//  Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.
function rockPaperPermutation (roundCount) {
  var resultArr = [];
  if(roundCount ===0){
    return [];
  }
  function permute(rounds, results){
    if(rounds === 0){
      resultArr.push(results);
      return;
    }
    permute(rounds-1, results+'r');
    permute(rounds-1, results+'p');
    permute(rounds-1, results+'s');
    
  }
permute(roundCount, '');
return resultArr;  

}

