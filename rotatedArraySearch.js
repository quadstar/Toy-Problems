/* Given a rotated, sorted array, your task is to efficiently find the index of an element within that array. Your time complexity goal is O( log(n) ), where ‘n’ is the number of elements in the array. For simplicity, you can assume that there are no duplicate elements in the array. */
function rotatedArraySearch(rotated, target){
  var low = 0;
  var high = rotated.length -1;

  while(low <= high){
    var mid = (low+high)/2;

    if(rotated[mid] === target) return mid;

    else if(rotated[low] <= rotated[mid]){
      if(rotated[low] <= target && target < rotated[mid]){
        high = mid -1;
      }
      else{
        low = mid + 1;
      }
    }

    else {
      if(rotated[mid] < target && target <= rotated[high]){
        low = mid + 1;
      }
      else {
        high = mid - 1; 
      }
    }
  }
  return -1;
}
