"use strict";

//Complete this algo
const isLoop = linkedlist => {
  let current = linkedlist.head;

  while (current) {
    if (current.wasHit) {
      return true;
    } else {
      current.wasHit = true;
    }
    current = current.next;
  }
  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
