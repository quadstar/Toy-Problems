nthFibonacci = function(n) {  
  if(!n) return 0;
  if(!(n-1)) return 1; 
  var result,
      curr = 1,
      prev = 0,
      num = 1;
  while(curr !== n){
    var temp = num;
    num = num+prev;
    prev = temp;
    result = num;
    curr++
  }
  return result;
};

