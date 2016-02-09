// Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'.

function firstNonRepeatedCharacter (string) {
   for(var i = 0 ; i < string.length ; i ++){
     var char = string.charAt(i);
     var curr = string.slice(0,i) + string.slice(i+1);
     if(curr.indexOf(char) === -1){
       return string.charAt(i);
     }
   }
   return 'sorry';
}