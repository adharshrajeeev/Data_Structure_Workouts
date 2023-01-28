class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null
    }

}


class doubleLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }


    pushFirst(data){
        const newNode=new Node(data)
        if(!this.head){
            this.head=newNode;
            this.tail=newNode
        }else{
            let current=this.head;
            this.head=newNode;
            newNode.next=current;
            current.prev=newNode
        }

        this.size++;
        return this;
    }


    pushAtLast(data){
        if(!this.head) return null;
        const newNode=new Node(data);
        this.tail.next=newNode;
        newNode.prev=this.tail;
        this.tail=newNode;
        this.size++;
        return this
    }
}


const list=new doubleLinkedList();

list.pushFirst(1);
list.pushFirst(2);
list.pushAtLast(3);
list.pushAtLast(4);
console.log(list)