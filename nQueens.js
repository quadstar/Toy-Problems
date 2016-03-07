countNQueensSolutions = function(n) {
  var count = 0;
  // Mask to preserve row length.
  var all = Math.pow(2,n) -1;
  function permutations(mad, col, mid){
    //base case
    if(col === all){
      count++;
    }
    var pos = ~(mad | col | mid) & all;
    while(pos){
      var bit = pos & -pos;
      pos = pos ^ bit;
      permutations( (mad|bit)<<1, col|bit, (mid|bit)>>1);
    }
  }
  permutations(0,0,0);
  return count;
};
