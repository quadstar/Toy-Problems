// Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere.
var hasCycle = function(linkedList){
  var result = false;
  var currNode = linkedList.next;
  while(currNode){
    if(currNode === linkedList){
      return true;  
    }  
    else{
      currNode = currNode.next;
    }
  }
  return result;
};