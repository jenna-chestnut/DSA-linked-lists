// Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. 
// What is the time complexity of this algorithm?

const LinkedList = require('./01-linked-list-class');
const printList = require('./03-supplemental-functions');

const lst = new LinkedList();
lst.insertLast('Apollo');
lst.insertLast('Boomer');
lst.insertLast('Helo');
lst.insertLast('Husker');
lst.insertLast('Starbuck');

function WhatDoesThisProgramDo(lst) {
  let current = lst.head;

  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}

// this function is O(n^2) because there are nested lists
// moves the first item in our list to the end ??

printList(lst);
WhatDoesThisProgramDo(lst);
printList(lst);