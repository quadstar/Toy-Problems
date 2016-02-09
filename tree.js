/* Someone wrote a tree implementation, but they forgot to finish writing the definitions for addChild and contains.

Help this person finish their tree by adding in the missing code for these methods.*/

var treeMaker = function(value){
  var newTree = Object.create(treeMaker.methods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};
treeMaker.methods = {};
treeMaker.methods.addChild = function(value){
  var node = treeMaker(value);
  this.children.push(node);
}
treeMaker.methods.contains = function(value){
  if (this.value === value) {
    return true;
  }
  var found = false;
  function findValue(node){
    for(var i=0; i < node.children.length; i++){
      if(node.children[i].value === value) {
        found = true;
        return;
      }
      else{
        findValue(node.children[i]);
      }
    }
  }
  findValue(this);
  return found;
  
}
