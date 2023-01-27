class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}


class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }


    insertInto(data){
        const newNode=new Node(data)
        
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }
        this.tail.next=newNode;
        this.tail=newNode
        this.size++;
    }

    popFirst(){
        let current=this.head;
        if(!this.head) return null;

        this.head=current.next;
        this.size--;
        return this
    }

    popLast(){
        let current=this.head;
        let previous;
        while(current.next){
            previous=current;
            current=current.next
        }
        previous.next=null;
        this.tail=previous
        this.size--;
    }

    removeTarget(target){
        let current=this.head;
        let previous=null;

        
       
        
        while(current.next){
            if(current.data === target){
                // console.log(current)
                // console.log(previous)
                previous.next=current.next;
                this.size--;
                return this
            }
         
            previous=current
            current=current.next;
            
        }
        return "not found"       
    }
}


const list=new LinkedList();

list.insertInto(1);
list.insertInto(2);
list.insertInto(3);
list.insertInto(4);
list.insertInto(5);
console.log(JSON.stringify(list))
list.popLast()
console.log(JSON.stringify(list))






