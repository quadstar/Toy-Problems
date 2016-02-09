/* 
Implement the function getClosestCommonAncestor and getAncestorPath in the Tree class
*/


var Tree = function(){
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child){
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

Tree.prototype.getClosestCommonAncestor = function(tree1, tree2){
  if(tree1 === tree2){
    return tree1;
  }
  if(!this.isDescendant(tree1) || !this.isDescendant(tree2)){
    return null;
  }
  var path1 = this.getAncestorPath(tree1);
  var path2 = this.getAncestorPath(tree2);
  for(var i = path1.length-1; i > -1; i--){
    for(var j = path2.length-1; j > -1; j--){
      if(path2[j] === path1[i]){
        return path1[i];
      } 
    }
  }
}

Tree.prototype.getAncestorPath = function(child){
  if(!this.isDescendant(child)) return null;
  else{
     for(var i = 0; i < this.children.length; i++){
        if(this.children[i]===child){
          return [this, this.children[i]];
        }
        else{
          if(this.children[i].isDescendant(child)){
           return [this].concat(this.children[i].getAncestorPath(child));   
          }
        }
      }
  }
}

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
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
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};