/*
Write a function that, given two objects, returns whether or not the two are deeply 
equivalent–meaning the structure of the two objects is the same, 
and so is the structure of each of their corresponding descendants.
*/

deepEquals = function(a, b){
  var result = true;
  function dog(obj, obj2){
    if(Object.keys(obj).length !== Object.keys(obj2).length){
      result = false;
      return;
    }
    for(var key in obj){
      if(typeof obj[key] === 'object'){
        if(typeof obj2[key] === 'object'){
          dog(obj[key], obj2[key]);
        }
        else{
          result = false;
          return;
        }
      }
      else if(obj[key] !== obj2[key]){
        result = false;
        return;
      }

    }
  }
  dog(a, b);
  return result;
};  
