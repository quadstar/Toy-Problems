/* Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
and prints out every value found, but in a spiral from the upper left in to the center. */

function spiralTraversal (matrix, width, height, results) {
  width = width || matrix[0].length;
  height = height || matrix.length;
  results = results || [];
    if(height === 1){
      for(var i = 0; i<matrix[0].length; i++){
        results.push(matrix[0][i]);
      }
      return results;
    }
    if(width === 1){
        for(var i = 0; i < matrix.length; i++){
            results.push(matrix[i][0]);
        }
        return results;
    }
    //first row
    for(var i =0; i < width; i++){
        results.push(matrix[0][i]);
    }
    //column at end
    for(var i = 1; i < matrix.length; i++){
        results.push(matrix[i][width-1]);
    }
    //reverse row at bottom
    for(var i = width-2; i >= 0; i--){
        results.push(matrix[height-1][i]);
    }
    //reverse column at front
    for(var i = height-2; i >0; i--){
        results.push(matrix[i][0]);
    }
    //make copy of 'peeled matrix'
    var newMatrix=[];
    for(var i = 1; i<height-1; i++){
        newMatrix.push([]);
        for(var j = 1; j< width -1;j++){
        newMatrix[i-1].push(matrix[i][j]);  
        }
    }
    if(newMatrix[0].length>1){
        return spiralTraversal(newMatrix, width-2, height-2, results);
    }
    else if(newMatrix[0].length === 1){
      for(var i = 0; i < newMatrix.length; i++){
        results.push(newMatrix[i][0]);
      }
        return results;
        
    }
    else{
      return results;
    }
}