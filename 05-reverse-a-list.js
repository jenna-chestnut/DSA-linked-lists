// Write an algorithm to reverse a linked list. 
// The time complexity of your algorithm should be linear (O(n)). 
// For this exercise, notice we are not asking you just to print the linked list in reverse or use another linked list to store the value in reverse order. 
// Your program should reverse the direction of a given singly linked list. 
// In other words, all pointers should point backward. BONUS: Solve this problem using both recursive and iterative algorithms.

const LinkedList = require('./01-linked-list-class');
const printList = require('./03-supplemental-functions');

const lst = new LinkedList();
lst.insertLast('Apollo');
lst.insertLast('Boomer');
lst.insertLast('Helo');
lst.insertLast('Husker');
lst.insertLast('Starbuck');

const reverseList = (lst) => {
  if (!lst.head) return null; // if list is empty
  let curr = lst.head; // curr is starting item
  let ogHead = lst.head; // hold OG item
  let tempNext; // create var for next holder
  let temp = curr.next; // hold our next value in temp variable
  while(temp !== null) { // while temp is holding a value
    tempNext = temp.next; // hold temp's next value
    temp.next = curr; //  make temp.next => curr (so we can apply it next cycle)
    curr = temp; // swap curr => temp 
    temp = tempNext; // replace temp with temp.next (which is curr)
  }
  lst.head = curr;
  ogHead.next = null;
};

reverseList(lst);
printList(lst);