// Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.
function largestProductOfThree(array){
  array.sort(function(a,b){return a-b;});
  var length = array.length;
  var pro1 = array[length-1] * array[length-2] * array[length-3];
  var pro2 = array[0] * array[1] * array[length -1];
  return pro2 > pro1 ? pro2 : pro1;
}