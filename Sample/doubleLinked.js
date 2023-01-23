class Node{
    constructor(data){
        this.data=data;
        this.prev=null;
        this.next=null;

    }
}


class doubelLinekedList{
    constructor(data){
        const newnode=new Node(data)
        this.head=newnode;
        this.tail=newnode
        this.size=0;
    }



    pushDouble(data){
        const newnode=new Node(data)
        if(!this.size){
            this.head=newnode
            this.tail=newnode
        }else{
            this.tail.next=newnode;
            newnode.prev=this.tail;
            this.tail=newnode;
        }
        this.size++;
        return this;
    }


   
    
    printNodes(){
        let current=this.head;
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }

}

const double=new doubelLinekedList(500);
double.pushDouble(200)

console.log(double)

