// Implement the following functions that operate on your linked list class. 
// Note that these should be free functions instead of methods of the linked list class, so implement them outside the linked list class. Test each function using the list created in exercise 1.

// display: displays the linked list
// size: returns the size of the linked list
// isEmpty: finds if the list is empty or not (without using the size() function)
// findPrevious: finds the node before the item you are looking for
// findLast: returns the last node in the linked list

const main = require('./02-singly-linked-list');

const printList = (main) => {
  if (!main.head) return null;
  let curr = main.head;

  let display = '';

  while(curr) {
    display += curr.value + ' ';
    curr = curr.next;
  }

  console.log(display);
};

const getSize = (main) => {
  if (!main.head) return 0;
  let curr = main.head;
  let length = 1;
  while (main.head !== null && curr.next !== null) {
    length++;
    curr = curr.next;
  }
  console.log(length);
};

const isItEmpty = (main) => {
  let isEmpty = main.head === null;
  console.log(isEmpty);
};

const findPrev = (main, item) => {
  if (!main.head) return null;
  let curr = main.head;

  while (curr.next && curr.next.value !== item) {
    curr = curr.next;
  }

  console.log('The item before ' + item + ' is ' + curr.value);
};

const findLast = (main) => {
  if (!main.head) return null;
  let curr = main.head;

  while (curr.next !== null) {
    curr = curr.next;
  }

  console.log('The last item is ' + curr.value);
};

// printList(main());
// getSize(main());
// isItEmpty(main());
// findPrev(main(), 'Kat');
// findLast(main());

module.exports = printList;