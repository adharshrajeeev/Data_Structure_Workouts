class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next
    }
}


class LinkedLists {
    constructor() {
        this.head = null,
            this.size = 0;
    }


    insertNodeAtFirst(data) {
        const newNode = new Node(data, this.head);
        this.head = newNode;
        this.size++;
    }


    insertNodeAtLast(data) {
        const newNode = new Node(data)
        let current;
        if (!this.head) {
            this.head = newNode;
            this.size++;
        } else {

             current = this.head;
            while (current.next) {
                current=current.next;
            }
            current.next=newNode;
        }
        this.size++;

    }


    printNodes(){
        let current=this.head;
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }


    removeAtfirst(){
        let current=this.head;
        let next=current.next;
        this.head=next;
    }


    removeAtend(){
        let current=this.head;
        let previous=null
        while(current.next){
            previous=current;
            current=current.next;
        }
        previous.next=null;
    }


    reverseLinkedList(){
        let current=this.head;
        let previous=null;
        let next;

        while(current!=null){
            next=current.next;
            current.next=previous;
            previous = current;
            current = next;
        }

        return previous;
    }
}


let list = new LinkedLists();

list.insertNodeAtFirst(500);
// list.insertNodeAtFirst(800);
list.insertNodeAtLast(900)
list.insertNodeAtLast(1000)
// list.insertNodeAtLast(900)
// list.insertNodeAtLast(900)
// list.insertNodeAtLast(8005);
// list.insertNodeAtFirst(900);

// list.reverseLinkedList();

list.printNodes();
list.reverseLinkedList();
// console.log(list.reverseLinkedList())
