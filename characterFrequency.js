/*
Write a function that takes as its input a string and returns an array
of arrays as shown below sorted in descending order by frequency and 
then by ascending order by character.
*/

function characterFrequency (string) {
  var length = string.length;
  var storage = {};
  for(var i = 0; i < length; i++){
    if(storage.hasOwnProperty(string.charAt(i))){
      storage[string.charAt(i)] += 1;
    } 
    else{
      storage[string.charAt(i)] = 1;
    }
  }
  var result = [];
  var largest;
  length = Object.keys(storage).length;
  for(var i=0; i < length; i++){
    largest = [0,0];
    for(var key in storage){
      if(storage[key] === largest[1] && key < largest[0]){
        largest[0] = key;
        largest[1] = storage[key];
      }
      if(storage[key] > largest[1]){
        largest[0] = key;
        largest[1] = storage[key];
      }
    }
    result.push(largest);
    delete storage[largest[0]];
  }
  return result;

}
