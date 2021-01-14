// Write an algorithm to find the middle element of a linked list. 
// Note You may be tempted to add a length property to your linked list class. 
// The length property is not a typical property of linked list, 
// Therefore don't make any modification to the linked list class that is provided to you. 
// Also, finding the size of the linked list using the size() function and dividing it by half will not find the correct middle of the linked list. 
// So, don't use either of these approaches.

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


const findMiddle = (lst) => {
  let node = lst.head;
  if (!node) return null;

  let fastNode = lst.head;
  let slowNode = lst.head;

  while (fastNode.next.next) {
    fastNode = fastNode.next.next;
    slowNode = slowNode.next;
  }

  console.log('The middle item is ' + slowNode.value);
};

findMiddle(lst);