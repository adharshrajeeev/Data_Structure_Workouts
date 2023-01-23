class DoublyLinkedList {
    constructor() {
       this.head = null;
       this.tail = null;
       this.length = 0;
    }
    insert(data, position = this.length) {
       let node = new this.Node(data);
       // List is currently empty
       if (this.head === null) {
          this.head = node;
          this.tail = node;
          this.length++;
          return this.head;
       }
       // Insertion at head
       if (position == 0) {
          node.prev = null;
          node.next = this.head;
          this.head.prev = node;
          this.head = node;
          return this.head;
       }
       let iter = 1;
       let currNode = this.head;
       while (currNode.next != null && iter < position) {
          currNode = currNode.next; iter++;
       }
       // Make new node point to next node in list
       node.next = currNode.next;
       // Make next node's previous point to new
        if (currNode.next != null) {
          currNode.next.prev = node;
       }
       // Make our node point to previous node
       node.prev = currNode;
 
       // Make previous node's next point to new node
       currNode.next = node;
 
       // check if inserted element was at the tail, if yes then make tail point to it
       if (this.tail.next != null) {
          this.tail = this.tail.next;
       }
       this.length++;
       return node;
    }
    remove(data, position = 0) {
       if (this.length === 0) {
          console.log("List is already empty");
          return;
       }
       this.length--;
       let currNode = this.head;
       if (position <= 0) {
          this.head = this.head.next;
          this.head.prev = null;
       } else if (position >= this.length - 1) {
          this.tail = this.tail.prev;
          this.tail.next = null;
       } else {
          let iter = 0;
          while (iter < position) {
             currNode = currNode.next;
             iter++;
          }
          currNode.next = currNode.next.next;
          currNode.next.prev = currNode;
       }
       return currNode;
    }
    display() {
       let currNode = this.head;
       while (currNode != null) {
          console.log(currNode.data + " <-> ");
          currNode = currNode.next;
       }
    }
 }
 
 DoublyLinkedList.prototype.Node = class {
    constructor(data) {
       this.data = data;
       this.next = null;
       this.prev = null;
    }
 };