/* 
Given a string representation of a 2d map, return the number of islands in the map. 
Land spaces are denoted by a zero, while water is denoted by a dot. 
Two land spaces are considered connected if they are adjacent (but not diagonal).
*/


function countIslands (mapStr) {
  var dog = mapStr.split('\n');
  var rowLength = dog[0].length;
  dog = dog.join('');
  dog = dog.split('');
  var islands = 0;
  console.log(mapStr);
  for(var i = 0 ; i < dog.length; i++){
    console.log(i, dog[i]);
    if(dog[i] === '0'){
      islands++;
      bark(i + rowLength);
      bark(i+1);
      if(i%rowLength !==0){
      bark(i-1);}
      bark(i-rowLength);
    }
  }
  function bark(coords){
    if(dog[coords] === '0'){
      dog[coords] = '.';
      bark(coords + rowLength);
      bark(coords - rowLength);
      bark(coords+1);
      if(i%rowLength !==0){
      bark(coords-1);
      }
    } 
    
  }
  return islands;
}
