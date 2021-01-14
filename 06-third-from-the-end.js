// Write an algorithm to find the 3rd element from the end of a linked list. 
// Note You may be tempted to add a length property to your linked list class. 
// The length property is not a typical property of linked list, therefore don't make any modification to the linked list class that is provided to you.

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

const findThird = (lst) => {
  let node = lst.head;

  if (!node || !node.next || !node.next.next) {
    console.log('not found');
    return;
  }

  while (node.next.next.next) { // as long as the node has 3+ spots ahead
    node = node.next; // set node to the next one
  }

  console.log('the third from last item is ' + node.value);
};

findThird(lst);