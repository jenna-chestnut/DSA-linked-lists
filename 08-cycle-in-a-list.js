// Write an algorithm to find whether a linked list has a cycle (i.e., whether a node in the list has its next value pointing to an earlier node in the list). 
// For this exercise, create a linked list with the name CycleList. 
// Be sure to insert nodes in the list so that it has a cycle. 
// Then test your program with a cycleList function.

const LinkedList = require('./01-linked-list-class');

const lst = new LinkedList();
lst.insertLast('Apollo');
lst.insertLast('Boomer');
lst.insertLast('Helo');
lst.insertLast('Husker');
lst.insertLast('Starbuck');
lst.insertLast('Salem');
lst.insertLast('Ody');
lst.insertLast('BB');

const isItCycle = (lst) => {
  let node = lst.head;
  if (!node) return null;

  while (node !== null) {
    if (node.flagged) return true;
    else node.flagged = true;
    node = node.next; 
  }

  return false;
};

console.log(isItCycle(lst)); // should be false

lst.head.next.next = lst.head;
console.log(isItCycle(lst)); // should be true