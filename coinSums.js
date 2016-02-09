/* 
Given a given number of pence, return the possible number of ways someone could make change.
*/

var coins = [1,2,5,10,20,50,100,200];

function coinSums (total) {
  var valid = [];
  for(var i = 0; i < coins.length; i++){
    if(total-coins[i]>=0){
      valid.push(coins[i]);
    }  
  }
  var count = 0;
  function permute(sum, last){
    if(sum === 0){
      count++
    }
    if(sum > 0){ 
      for(var i = 0; i < valid.length; i++){
        if(valid[i] <= sum && valid[i] >= last){
          permute(sum-valid[i], valid[i]);
        }
      }
    }
  }
  permute(total,0);
  return count;
}