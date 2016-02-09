/* 
Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.
*/
function longestRun (string) {
  var dog = [0,0]
  var curr = string[0];
  var run = [0,0];
  string.split('').forEach((e,i,c)=> {
    if(dog[1]-dog[0] < run[1]-run[0]){
        dog = run;
    }
    if(curr !== e){
      run = [i,i];
      curr = e;
    }
    else{
      run[1] = i;
    }
  });
  return dog;
}