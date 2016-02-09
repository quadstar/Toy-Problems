/* 
Make an array method that can return whether or not a context array is a subset of an input array.
*/

Array.prototype.isSubsetOf = function(arr) {
  var notAnArray = {};
  arr.forEach(function(e){
    notAnArray[e] = true;
  })
  for(var i = 0; i < this.length; i++){
    if(!notAnArray[this[i]]){
      return false;
    }
  }
  return true;
};
