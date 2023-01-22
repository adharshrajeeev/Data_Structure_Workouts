class Node{
    constructor(data){
        this.data=data;
        this.prev=null;
        this.next=null;
    }

}


class doubelLinekedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }



    push(data){
        let newNode=new Node(data)
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }
        else{
            let temp=this.tail;
            this.tail=newNode;
            newNode.prev=temp;
            temp.next=newNode;
        }
        this.size++;
    }


    printListData(){
        let current=this.head;
        let output=""

        while(current){
            output+=current.data+"  ";
            current=current.next;
        }

        console.log(output)
    }

}

let list2 =new doubelLinekedList();
list2.push(1)
list2.push(2)
// 

list2.printListData();

