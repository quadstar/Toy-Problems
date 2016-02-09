/* 
Implement the function ‘bind’, which accepts a function and a context as arguments.
The context argument should override an existing context that the function is defined in.
Your bind function should return the passed in function.
 */

var bind = function(func, context){
  var args = [].slice.call(arguments, 2);
  return function(){
    return func.apply(context,[...args, ...arguments]);
  }
};  
Function.prototype.bind = function(context) {
  return bind(this, ...arguments);
};
