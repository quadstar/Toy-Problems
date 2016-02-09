// Implement a function that sorts an array of numbers using the “mergesort” algorithm.

function mergeSort(arr){
  if(arr.length === 1) return arr; 
  if(arr.length === 2){
    if(arr[0] > arr[1]){
      return [arr[1], arr[0]];
    }
    return arr
  }
  else{
    var mid = Math.ceil(arr.length / 2);
    var dog = arr.slice(0, mid);
    var dog2 = arr.slice(mid);
  }
  var result = [];
  var half1 = mergeSort(dog);
  var half2 = mergeSort(dog2);
  var result = merge(half1, half2);
  return result;
}

function merge(arr1, arr2){
  var j = 0;
  arr2.forEach(function(e,i,c){
    while(arr1[j] < e){
      j++
      if(arr1.length - 1 === j) break;
    }
    if(j === 0){
      arr1.unshift(e);
    }
    else if(j=== arr1.length-1 && e > arr1[j]){
      arr1.push(e);
    }
    else{
      arr1.splice(j,0,e)
    }
  });
  return arr1;
}
