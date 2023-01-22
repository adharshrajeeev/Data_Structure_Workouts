class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null; 
    }

}

class DoublyLinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0;
    }

    pushAtEnd(data){
        var newNode=new Node(data)
        if(!this.head){
            this.head=newNode;
            this.tail=newNode
          
        }else{

            this.tail.next=newNode;
            newNode.prev=this.tail;
            this.tail=newNode;
        }
        this.size++;
        return this;
    }

    pushAtBegining(data){
        var newNode =  new Node(data);

        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }else{
            newNode.next=this.head;
            this.head=newNode;
            newNode.next.prev=newNode;
        }
        this.size++;
        return this;
    }

    popAtEnd(){
        if(!this.head){
            return undefined
        }
        if(this.head.next===null){
            this.head=null;
            this.tail=null
            return this;
        }
        this.tail.prev.next=null
        this.tail= this.tail.prev
        this.size--;
        return this
    }

    poptAtBegining(){
        if(!this.head){
            return undefined
        }
        if(this.head.next==null){
            this.head=null;
            this.tail=null
            return this;
        }
        var popedHead=this.head;
        this.head=popedHead.next;
        this.head.prev=null;
        this.size--;
        return this
    }
    getAtPosition(index){
       
        if(index < 0 || index > this.size) return null;

        if(index===0){
            return this.head.data
        }

        if(index===this.size){
            return this.tail.data
        }

       
         let current=this.head;
         let counter=0
         while(counter!=index){
         current=current.next;
         counter++;
         }
         return current.data
        
    }

    insertAtPosition(index,data){

        if(index < 0 || index >= this.size)  return null;

        if(index===0){
            return this.pushAtBegining(data)
        }

        if(index===this.size-1){
            return this.pushAtEnd(data)
        }

        let counter=0;
        let current=this.head;
        while(counter!=index){
            current=current.next;
            counter++
        }
        let newNode=new Node(data)
        current.prev.next=newNode;
        newNode.prev=current.prev
        newNode.next=current;
        current.prev=newNode;
        this.size++;
        return this
    }


    removeAtPosition(index){
        if(index < 0 || index > this.size) return null;

        if(index === 0){
            return this.poptAtBegining();
        }
        if(index === this.size){
            return this.popAtEnd();
        }

        let counter=0;
        let current=this.head;

        while(counter!=index){
            current=current.next;
            counter++;
        }
        current.next.prev=current.prev;
        current.prev.next=current.next;
        this.size--;
        return this;
    }

    printDoublyData(){
        let current=this.head;
        while(current){
            console.log(current.data);
            current=current.next;
        }
        return this
    }

  
}

const list=new DoublyLinkedList();

list.pushAtEnd("1");
list.pushAtEnd("2");
list.pushAtEnd("3");
list.pushAtEnd("4");
list.pushAtEnd("5");
list.pushAtEnd("6");
// list.pushAtEnd(3)
// list.pushAtBegining(0);
// list.pushAtBegining(1010);
// list.popAtEnd();
// list.poptAtBegining();
// console.log(list)

list.printDoublyData();

console.log("<===============>")
list.removeAtPosition(2);

list.printDoublyData();

