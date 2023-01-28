class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class SingleLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }

    insertAtend(data){
        const newNode=new Node(data)
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
           
        }else{
            this.tail.next=newNode;
            this.tail=newNode
        }
        this.size++;
        return
    }

    insertAtFirst(data){

        const newNode=new Node(data);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }else{

            let current=this.head;
            this.head=newNode;
            newNode.next=current;
        }
        this.size++;
        return this;
        
    }

    popAtEnd(){
        if(!this.head) return null

        let current=this.head;
        let previous=null;
        while(current.next){
            previous=current;
            current=current.next;
        }
        previous.next=null
        this.tail=previous;
        this.size--;
    }

    popAtBegining(){
        if(!this.head) return null;

        let current=this.head;
        this.head=current.next;
        this.size--;
        return this;
    }
}


const list=new SingleLinkedList();
list.insertAtend(1);
list.insertAtend(2);
list.insertAtend(3);
list.insertAtend(4);
list.popAtBegining();
// list.insertAtFirst(0);
// list.insertAtFirst(-1)
console.log(JSON.stringify(list))