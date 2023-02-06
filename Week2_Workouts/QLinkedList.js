class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Queue{
    constructor(){
        this.head=null;
        this.tail=null
        this.size=0;
    }

    push(value){
        const newQueue=new Node(value)
        if(!this.head){
            this.head=newQueue;
            this.tail=newQueue;
        }else{
            this.tail.next=newQueue;
            this.tail=newQueue
        }
        this.size++;
        return this
    }


    shift(){
    if(!this.head) return null;
    
    if(this.head==this.tail){
        this.tail=null
    }
    this.head=this.head.next;
    this.size--;

    }
}

const queue=new Queue();

queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
console.log(queue)
queue.shift()
queue.shift()
queue.shift()
queue.shift()
console.log(queue)