function quickSort(arr) {
  function dogSort(items, left, right){
    if (items.length > 1) {
        var index = barktition(items, left, right);
        if (left < index - 1) {
            dogSort(items, left, index - 1);
        }
        if (index < right) {
            dogSort(items, index, right);
        }
    }
    return items;
  }
  return dogSort(arr, 0, arr.length-1);
}

function woof(coll, dog1, dog2){
  var cat = coll[dog2];
  coll[dog2] = coll[dog1];
  coll[dog1] = cat;
}

function barktition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)];
    while (left <= right) {
        while (items[left] < pivot) {
            left++;
        }
        while (items[right] > pivot) {
            right--;
        }
        if (left <= right) {
            woof(items, left, right);
            left++;
            right--;
        }
    }
    return left;
}
