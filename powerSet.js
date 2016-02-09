// Return an array that contains the power set of a given string. The power set is a set of all the possible subsets, including the empty set.

function powerSet (string) {
  var results = [""];
  var bark = string.split('').filter(function(item, i, ar){ return ar.indexOf(item) === i; });
  bark.sort();
  var dog = Math.pow(2, bark.length);
  for(var i = 1; i < dog; i++){
    var temp = i.toString(2);
    var str = '';
    results.push(temp);
  }
  var res = results.map((e,i,c) => {
    var str = ''
    while(e.length < bark.length){
      e = '0' + e;
    }
    for(var k = 0; k < e.length; k++){
      if(e.charAt(k) === '1'){
        str += bark[k];
      }
    }
    return str;
  });
  res.sort();
  return res;
}