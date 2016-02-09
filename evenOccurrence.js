/* 
Find the first item that occurs an even number of times in an array.
Remember to handle multiple even-occurrence items and return the first one.
Return null if there are no even-occurrence items.
*/

function evenOccurence (arr) {
  // Write your code here, and
  // return your final answer.
  
  function count(array){
    var obj = {};  
    for(var l = 0; l < array.length; l++){
      if(!obj.hasOwnProperty(array[l])){
        obj[array[l]] = 1;
      }
      else {
        obj[array[l]] += 1;
      }
    }
    return obj;
  } 

  var counted = count(arr);
  console.log(counted);
  var even = [];
  for(var key in counted){
    if(counted[key] % 2 === 0){
      even.push(key);
    }
  }

  if(even.length === 0){
    return null;
  }

  var shortest;
  
  if(typeof arr[0] === 'number'){
    for(var k = 0; k < even.length; k++){
      even[k] = parseInt(even[k]);
    }
  }

  for(var i = 0; i < even.length; i++){
    if(i===0){
      shortest = arr.indexOf(even[i]);
    }
    if(arr.indexOf(even[i]) < shortest){
      shortest = arr.indexOf(even[i]);
    }
  }

  return arr[shortest];
}
