"use strict";

// Complete this algo
const binarySearch = (array, target) => {
  if (array.length <= 1 && array[0] !== target) {
    return false;
  } else {
    let middle = Math.floor(array.length / 2);
    if (array[middle] === target) {
      return true;
    } else {
      if (array[middle] > target) {
        return binarySearch(array.splice(0, middle), target);
      } else {
        return binarySearch(array.splice(middle), target);
      }
    }
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
