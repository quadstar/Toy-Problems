/* Given an array of numbers, calculate the greatest contiguous sum of numbers in it. A single array item will count as a contiguous sum. */
function sumArray (array) {
  var length = array.length;
  var sums = [];
  
  function getSum(){
    for(var i = 0; i < length; i++){
      var curr = array[i];
      var dog = curr;
      sums.push(array[i]);
      for(var j = i; j < length; j++){
        //increment
        if(j === i){
          continue;
        }
        dog += array[j];
        sums.push(dog);
      }
    }
  }
  getSum();
  function largest(){
    var lar = -420;
    for(var i = 0; i < sums.length; i++){
      if(sums[i] > lar){
        lar = sums[i];
      }
    }
    return lar;
  }
  return largest();
  
}
