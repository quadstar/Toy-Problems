// Implement a linked-list
var LinkedList = function () {
  this.head = null;
  this.tail = null;
};

function createNode(value){
  return {value: value,
    next: null,
    prev: null
  }
}

LinkedList.prototype.addToTail = function(value){
  var newNode = createNode(value);
  if(this.head === null){
    this.head = newNode;
    this.tail = newNode;
  }
  else{
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }
}
LinkedList.prototype.removeHead = function(){
  var node = this.head;
  if(this.head === this.tail){
    this.head = null;
    this.tail = null;
  }
  else{
    while(node.next){
      this.head = this.head.next;
      node = this.head;
    }
  }
}
LinkedList.prototype.contains = function(target){
  var node = this.head;
  while(node){
    if(target === node.value){
      return true;
    }
    node = node.next
  }
  return false;
}