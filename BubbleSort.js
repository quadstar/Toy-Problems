function bubbleSort (input) {
  for(var i = 0; i < input.length; i++){
    var curr = input[i];
    for(var j = 0; j < input.length; j++){
      if(input[j-1] > input[j]){
        var temp = input[j];
        input[j] = input[j-1];
        input[j-1] = temp;
      }
    }
  }
  return input;
}