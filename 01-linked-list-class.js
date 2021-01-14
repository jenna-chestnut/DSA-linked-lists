// Write a linked list class and its core functions (insertFirst, insertLast, remove, find) from scratch.

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(item, key) {
    // If the list is empty
    if (!this.head) {
      return null;
    } 
    else if (this.head === key) {
      this.insertFirst(item);
      return;
    }

    let currNode = this.head;

    // Check for the item 
    while (currNode.next !== null && currNode.next.value === key) {
      /* Set currNode to value of next and continue */
      currNode = currNode.next;
    }
    if (currNode.next === null) return;
    // Found it, set current node's next to our new node, setting the new node's next to following node
    currNode.next = new _Node(item, currNode.next);
  }

  insertAfter(item, key) {
    if (!this.head) {
      return null;
    } 
    else if (this.head === key) {
      this.head.next = new _Node(item, null);
      return;
    }
    
    let currNode = this.head;
    while (currNode !== null && currNode.value !== key) {
      /* Set currNode to value of next and continue */
      currNode = currNode.next;
    }
    if (currNode === null) return;
    // Found it, set current node's next to our new node, setting the new node's next to following node
    currNode.next = new _Node(item, currNode.next);
  }

  insertAt(item, key) {
    if (!this.head) return;
    else if (key === 1) {
      this.insertFirst(item);
      return;
    }
    let num = 2;
    let currNode = this.head;
    while (num < key) {
      num++;
      currNode = currNode.next;
    }
    if (!currNode) return null;
    currNode.next = new _Node(item, currNode.next);
  }

  find(item) { 
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item 
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
           and the item is not on the list */
      if (currNode.next === null) {
        return null;
      }
      else {
        // Otherwise, keep looking 
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }

  remove(item){ 
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      // Save the previous node 
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

module.exports = LinkedList;