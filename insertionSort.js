/* 
Insertion sort is a basic sorting algorithm.

Insertion sort iterates over an array, growing a sorted array behind the current location. 
It takes each element from the input and finds the spot, up to the current point, where that element belongs. 
It does this until it gets to the end of the array.
*/

function insertionSort(array) {
 var arr = [];
 var length = array.length;
 function shortest(dog, woof, i){
    if(woof !== 0){
    woof = woof || Infinity;
    }   
    i = i || 0;
    if(i === length){
        arr.push(woof);
        array.splice(array.indexOf(woof), 1);
        return;
    }
    if(dog[i] < woof){
        woof = dog[i];
    }
    
    shortest(dog, woof, i+1);
 }
 for(var i = 0; i < length; i++){
    shortest(array);
 }
 
 return arr;
 
}
