class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}


class Queue{
    constructor(){
        this.first=null;
        this.last=null;
        this.size=0
    }

    addQueue(data){
        const newQ=new Node(data);
        if(!this.first){
            this.first=newQ;
            this.last=newQ
        }

        this.last.next=newQ;
        this.last=newQ;
        this.size++;
        return this.size;

    }
    deQueue(){
        if(!this.first)  return null;

        if(this.first ==  this.last){
            this.last=null
        }
        this.first=this.first.next
        this.size--;
        return this
    }
}


const newQueue=new Queue();

newQueue.addQueue(1)
newQueue.addQueue(2)
newQueue.addQueue(3)
newQueue.addQueue(4)

console.log(JSON.stringify(newQueue))

newQueue.deQueue()

console.log(JSON.stringify(newQueue))
