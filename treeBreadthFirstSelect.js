/* Implement a breadth-first method on a tree class. */
var Tree = function(value, gen){
  this.value = value;
  this.children = [];
  this.gen = gen || 0;
};

Tree.prototype.BFSelect = function(filter) {
  var bones = [];
  var dogFirstSelect = function(woof, bark){
    bones.push(bark);
    bark.children.forEach( e => { dogFirstSelect(woof+1, e) } );
  }
  dogFirstSelect(0, this);
  bones.sort((a,b) => {
    return a.gen - b.gen
  });
  var dog = [];
  bones.forEach( e => {
    if(filter(e.value, e.gen)) dog.push(e.value);
  });
  return dog;
};


Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child, this.gen + 1);
  }
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error('That child is already a child of this tree');
  }
  return child;
};


Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        return true;
      }
    }
    return false;
  }
};

Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    this.children.splice(index,1);
  }else{
    throw new Error('That node is not an immediate child of this tree');
  }
};
