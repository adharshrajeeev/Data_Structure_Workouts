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


    popAtPosition(index){

        if(index <  0 || index >this.size ) return null

        if(index==0) return this.popAtBegining();

        if(index==this.size-1) return this.popAtEnd();

        var current=this.head;
        var previous=null;
        var counter=0;
        while(counter!=index){
            previous=current;
            current=current.next;
            counter++
        }
        previous.next=current.next;
        this.size--;
        return this;
       
       
    }

    pushAtPosition(index,data){
        if(index <  0 || index >this.size ) return null

        if(index == 0) return this.insertAtFirst(data);

        if(index == this.size-1) return this.insertAtend(data);

        let current=this.head;
        let previous=null;
        let counter=0;
        while(counter!=index){
            previous=current;
            current=current.next;
            counter++;
        }
        const newNode=new Node(data);
        previous.next=newNode;
        newNode.next=current
        this.size++;
    }

    findMiddle(){
        let current=this.head;
        let count=0
        while(current.next){
            let middle=Math.floor(this.size/2);
            if(count ==  middle){
                return current.data
            }
            current=current.next;
            count++

        }
        return -1
    }

    getElement(value){
        var current=this.head;
        while(current.next){
            if(current.data == value){
                return current
            }
            current=current.next
        }

        return -1

    }


    removeElement(value){
        if(!this.head)  return null;

        let current=this.head;
        let previous=null;

        while(current.data!=value){
            previous=current;
            current=current.next
        }

        previous.next=current.next;
        this.size--;
        return;
    }


    printNodes(){
        let current=this.head;
        while(current!=null){
            console.log(current.data);
            current=current.next;
        }

    }
    

    
}


const list=new SingleLinkedList();
list.insertAtend(1);
list.insertAtend(2);
list.insertAtend(3);
// list.popAtBegining();
// list.insertAtFirst(0);
// list.insertAtFirst(-1)


console.log(JSON.stringify(list))

var arr=[4,5,6]
for(var i=0;i<arr.length;i++){
    list.insertAtend(arr[i])
}


