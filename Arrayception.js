/*
  Given an array of arbitrarily nested arrays, return n, where n is the 
  deepest level that contains a non-array value.
*/
function arrayception (array) {
  var depth = 0;
  if(!array.length) return 0;
  function search(arr, leagues){
    if(arr.length === 0){
      return;
    }
    for(var i = 0 ; i < arr.length; i++){
      if(!Array.isArray(arr[i]) && leagues > depth){
        depth = leagues;
      }
      else{
        search(arr[i], leagues+1);
      }
    }
  }
  search(array, 1);
  return depth;
  
}