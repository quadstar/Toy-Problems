/* 
Given an array containing a deck of cards, implement a function that shuffles the deck.
*/
var shuffleDeck = function(deck) {
  var dog = [...deck];
  dog.forEach((d,o,g)=> {
    var j = Math.floor(Math.random()*(dog.length-o));
    var woof = g[o];
    g[o] = g[o+j];
    g[o+j] = woof;
  })
  return dog;
}
