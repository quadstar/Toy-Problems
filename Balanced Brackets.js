/*
Given a string, return true if it contains all balanced parenthesis (), curly-brackets {}, and square-brackets [].
*/

function isBalanced (str) {
  var result = true;
  var brackets = ['[',']','(',')','{','}']
  var arr = [];
  str.split('').forEach((e,i,c)=>{
    if(brackets.indexOf(e) !== -1){
      arr.push(e);
    }
  })
  var opened = [];
  arr.forEach((e,i,c) => {
    if(e === '[' || e === '{' || e === '('){
      opened.push(e);
    }
    else{
      if(e === ']' && opened[opened.length-1] !== '['){
        result = false;
      }
      else if(e === ')' && opened[opened.length-1] !== '('){
        result = false;
      }
      else if(e === '}' && opened[opened.length-1] !== '{'){
        result = false;
      }
      else {
        opened.pop();
      }
    }
  })
  if(opened.length){
    result = false;
  }
  return result;
}
