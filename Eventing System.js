/* 
Make an eventing system mix-in that adds .trigger() and .on() to any input object.
- mixEvents should return the original object it was passed after extending it.
- If we repeatedly call .on with the same event name, it should
continue to call the old function as well. That is to say, we can have multiple
listeners for an event.
- If obj.trigger is called with additional arguments, pass those to the
listeners.
- It is not necessary to write a way to remove listeners.
*/

var mixEvents = function(obj) {
  var events = {};

  obj.trigger = function (event) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    if(obj.events && obj.events[event]){
     
     var cbArr = obj.events[event];
     for(var i = 0; i < cbArr.length; i++){
       var cb = cbArr[i];
       cb.apply(null, args);
     }
    }
  };

  obj.on = function (event, callback) {
    if(!obj.events) obj.events = {};
    if(!obj.events[event]) obj.events[event] = [];
      obj.events[event].push(callback);
    };
  return obj;
};