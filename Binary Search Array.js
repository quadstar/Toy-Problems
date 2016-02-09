/*
Given a sorted array of integers, find the index of a target value using a binary search algorithm.
*/

function binarySearch (array, target) {
  var result = 0;
  function search(top, bot){
    var i = Math.floor( (top+bot)/2 );
    if(array[i] === target){
      result = i;
      return;
    }
    else if(top-bot < 3){
      if(array[i+1] === target || array[i-1] === target){
        result = array[i+1] === target ? i+1 : i-1;
        return;
      }
      result = -1
      return;
    }
    else if(array[i] > target){
      search(i-1, bot);
    }
    else{
      search(top, i+1);
    }
  }
  search(array.length-1, 0);
  return result;
}
