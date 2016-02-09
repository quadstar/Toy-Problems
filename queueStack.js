// Write a stack. Once you’re done, implement a queue using two stacks. Do not create a storage array for your queue.

var Stack = function() {
  var storage = [];

  this.push = function(a){
    storage.unshift(a);
  };

  this.pop = function(){
    return storage.shift();
  };

  this.size = function(){
    return storage.length;
  };
};

var Queue = function() {

  var storage = [];

  this.enqueue = function(a){
    storage.push(a)
  };

  this.dequeue = function(){
    return storage.shift();
  };

  this.size = function(){
    return storage.length;
  };
};
