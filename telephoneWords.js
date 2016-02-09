/* Write a function that takes up to four digits of a phone number, and returns a list of all of the words that can be written on the phone with that number. (You should return all permutations, not only English words.) */
function telephoneWords (digitString) {
  var dog = 
  {2: ['A','B','C'],
  3: ['D','E','F'],
  4: ['G','H','I'],
  5: ['J','K','L'],
  6: ['M','N','O'],
  7: ['P','Q','R','S'],
  8: ['T','U','V'],
  9: ['W','X','Y', 'Z']
  };
  var results = [];
  function woof(digits, combos){
    var shiaLaBeouf = digits.charAt(0);
    //sooooooooo basic
    if(digits.length === 0){
      results.push(combos);
      return;
    }
    //loopy mambo jambo
    if(!dog[shiaLaBeouf]){
      combos += shiaLaBeouf;
      woof(digits.slice(1), combos);
    }
    else{
      for(var j = 0; j < dog[shiaLaBeouf].length; j++){ 
        var temp = combos;
        combos += dog[shiaLaBeouf][j];
        woof(digits.slice(1), combos);
        combos = temp;
      }
    }
  }
  woof(digitString, '');
  return results;
}