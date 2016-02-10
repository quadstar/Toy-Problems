/* 
Write a function that rotates a NxN matrix 90 degrees clockwise.
EXTRA CREDIT
- Make your function operate on rectangular matrices (MxN rather than NxN).
- Make your function accept a parameter for the direction of rotation (1 = clockwise, -1 = counterclockwise)
*/

function rotateMatrix (matrix, rotation) {
  rotation = rotation || 1;
  matrix = transpose(matrix);
  if(rotation) matrix.forEach((e,i,c)=>{e.reverse();})
  else matrix.reverse();
  return matrix;
}

function transpose(neo) {
  var result = [];
  neo[0].forEach((e,i,c)=>{
    result[i] = [];
    for(var j = neo.length - 1; j > -1; j--){
      result[i][j] = neo[j][i];
    }
  })
  return result;
};
