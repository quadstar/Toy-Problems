/*
Finish this implementation of a Hash Table.
It should have the methods insert(), retrieve(), and remove(). 
Your hash table need not resize itself, but shall handle collisions.
*/

  var makeHashTable = function(){
    var table = {};
    var storage = [];
    var storageLimit = 1000;

    table.insert = function(key, value){
      var index = getIndexBelowMaxForKey(key, storageLimit);
      storage[index] = storage[index] || {};
      storage[index][key] = value;
    };

    table.retrieve = function(key){
      var index = getIndexBelowMaxForKey(key, storageLimit);
      return storage[index] ? storage[index][key] : undefined;
    };

    table.remove = function(key){
      var index = getIndexBelowMaxForKey(key, storageLimit);
      storage[index] && delete storage[index][key];
    }
    return table;  
  };  
 var getIndexBelowMaxForKey = function(str, max){
   var hash = 0;
   for (var i = 0; i < str.length; i++) {
     hash = (hash<<5) + hash + str.charCodeAt(i);
     hash = hash & hash; // Convert to 32bit integer
     hash = Math.abs(hash);
   }
   return hash % max;
 };

 