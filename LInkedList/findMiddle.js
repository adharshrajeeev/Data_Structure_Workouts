class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}

class LinkedLists{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }


    insertInto(data){
        const newNode=new Node(data);

        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
            
        }else{
            
          this.tail.next=newNode;
          this.tail=newNode
        }
        this.size++;
        return this

    }

    findMiddle(){
        let count=0;
        let current=this.head;
        while(current.next){
            count++
            let middle=Math.floor((this.size)/2) 
            current=current.next;
            if(count==middle){    
               return current.data
            }
        }
    }

    findMiddleWithoutSize(){

    }
}


const list=new LinkedLists();
list.insertInto(1)
list.insertInto(2)
// list.insertInto(3)
// list.insertInto(4)
// list.insertInto(5)
console.log(list.findMiddle())
// console.log(list)