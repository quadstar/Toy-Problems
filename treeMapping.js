// Implement a map method on this Tree class.
var Tree = function (value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.map = function (callback) {
   var dog = new Tree(this.value);
  function copyTree(ori, copy){
    copy = copy || new Tree(ori.value);
    var length = ori.children.length
    if(length){
     for(var i = 0; i < length; i++){
       copy.addChild(ori.children[i].value);
       copyTree(ori.children[i], copy.children[i]);
     }
    }
  }
  copyTree(this, dog);

  function maperino(cb, node){
  node.value = cb(node.value);
  // base case
  if (node.children === []) {
    return;
  }
  // recursive case
  for (var i = 0; i < node.children.length; i++) {
    maperino(cb, node.children[i]);
  }
  }
  maperino(callback, dog);
  return dog;
};

/**
 * You shouldn't need to change anything below here,
 * but feel free to read it.
 */

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function (child) {
  if (! child ||  ! (child instanceof Tree)){
    child = new Tree(child);
  }

  if (! this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function (child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function (child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index,1);
  } else {
    throw new Error("That node is not an immediate child of this tree");
  }
};