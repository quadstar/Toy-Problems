/* 
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.
*/
function sudokuCheck (boardStr) {
  var rows = boardStr.split('\n');
  var cols = [];
  var squares = [];
  for(var i = 0; i < 9; i++){
    var col = '';
    for(var j = 0; j < 9; j++){
      col += rows[j][i];
    }
    cols.push(col);
  }
  for(var i = 0; i < 9; i=i+3){
    squares.push(rows[i].slice(0,3)+rows[i+1].slice(0,3)+rows[i+2].slice(0,3));
    squares.push(rows[i].slice(3,6)+rows[i+1].slice(3,6)+rows[i+2].slice(3,6));
    squares.push(rows[i].slice(6,9)+rows[i+1].slice(6,9)+rows[i+2].slice(6,9));
  }
  for(var i =0; i< 9; i++){
    var checkr, checkc, checks;
    checkr = checkc = checks = '000000000';
    for(var k =0; k < 9; k++){
      checkr = checkr.slice(0,parseInt(rows[i][k])-1) + '1' + checkr.slice(parseInt(rows[i][k]));
      checkc = checkc.slice(0,parseInt(cols[i][k])-1) + '1' + checkc.slice(parseInt(cols[i][k]));
      checks = checks.slice(0,parseInt(squares[i][k])-1) + '1' + checks.slice(parseInt(squares[i][k]));
    }
    if(checkr !== '111111111' || checkc !== '111111111' || checks !== '111111111'){
      return 'invalid'
    }
  }
  return 'solved';
}
