function skylinePaint(A) {
  var strokes = 0;
  var top = 0; 
  for(var i = 0; i < A.length; i++){
    if(A[i] > top)
      strokes +=  A[i] - top;
    top = A[i]; 
  }
  return strokes;
}
