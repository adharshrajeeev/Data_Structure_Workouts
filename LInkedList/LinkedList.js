
class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
} 

class SinglyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.lenght=0;
    }



    pushatEnd(data){
         var newNode= new Node(data);
        if(!this.head){
            this.head=newNode;
            this.tail=this.head
          
        }else{
            this.tail.next=newNode;
            this.tail=newNode;
           
        }   
        this.lenght++;
        return this
    }

    popAtEnd(){
       if(!this.head) return undefined

       var current=this.head;
       var previous=this.tail;

       while(current.next){
        previous=current;
        current=current.next
       }
       this.tail=previous;
       this.tail.next=null;
       this.lenght--;
       if(this.lenght===0){
        this.head=null;
        this.tail=null;
       }
       return current
       
    }

    pushAtBeginning(data){
        let newNode=new Node(data)
        if(!this.head) {
            this.head=newNode;
            this.tail=this.head

        }else{
           newNode.next=this.head;
            this.head=newNode;
              
           
        }
        
        this.lenght++;
    }

    popAtBeginning(){
        if(!this.head) return undefined

        var current=this.head;
        this.head=current.next;
        this.lenght--;
        if(this.lenght===0){
            this.head=null;
            this.tail=null;
           }
        return current
    }

    getANode(index){
        if(index < 0 || index >=this.lenght){
            return null;
        }

        var counter=0;
        var current=this.head;
        while(counter!==index){
            current=current.next;
            counter++
        }
        return current
    }

    insertAtPosition(data,index){
        if(index < 0 || index >this.lenght){
            return false;
        }
        if(index===0){
            return this.pushAtBeginning(data)
       
        }
        if(index===this.lenght){
            return   this.pushatEnd(data)
           
        }
        var newNode=new Node(data);
        var previous=this.getANode(index-1);
        var temp=previous.next;
        previous.next=newNode;
        newNode.next=temp;
        this.lenght++; 
        return this
    }

    removeAtPosition(index){
        if(index < 0 || index >= this.lenght){
            return false
        }
        if(index===0){
            return this.popAtBeginning();
       
        }
        if(index===this.lenght-1){
            return   this.popAtEnd();
           
        }
        var current=this.head;
        var previous=null;
        var counter=0;
        while(counter!=index){
            previous=current;
            current=current.next;
            counter++;
        }
        previous.next=current.next;
        this.lenght--;
        return this   
        
    }

    reverse(){
        var node=this.head;
        this.head=this.tail;
        this.tail=node;
        var previous=null;
        var next;
        for(var i=0;i<this.lenght;i++){
            next = node.next;
            node.next=previous;
            previous=node;
            node=next;
        }
        return this;
    }


    deleteValue(value){
        if(value==this.head.data){
            return this.popAtBeginning();
        }
        if(value===this.tail.data){
            return this.popAtEnd();
        }
      
        var current=this.head;
        var previous=this.head;
        while(current){
            if(value===current.data){
                previous.next=current.next;
                this.lenght--;
                return this
            }
            previous=current;
            current=current.next;
        }
    }

    removeDuplicates(){
        let current=this.head;
        let previous=null;
        let set=new Set();
        while(current!=null){
            if(set.has(current.data)){
                previous.next=current.next
                this.lenght--;
            }
            else{
                set.add(current.data);
                previous=current;
            }
            current=current.next;
        }
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



var list=new SinglyLinkedList();
// list.pushatEnd("1")
// list.pushatEnd("2")
// list.pushatEnd("3")
// list.printNodes();
// console.log("<=============>")
// list.popAtBeginning();
// list.popAtBeginning();
// list.pushAtBeginning(0)
// list.pushAtBeginning(1)
// list.printNodes();
// console.log("<===================>");
// list.insertAtPosition(100,3);
// list.printNodes();
// console.log(list)

// list.removeAtPosition(6);
// console.log("<=REMOVE=========>");
// list.printNodes();
// list.removeAtPosition(2);
// console.log("<=AFTER REMOVAL=========>");
// list.reverse();
// list.printNodes();
// console.log(JSON.stringify(list))

list.pushatEnd(1);
list.pushatEnd(2);
list.pushatEnd(2);
list.pushatEnd(4);
list.pushatEnd(5);
list.printNodes();
console.log(JSON.stringify(list))
list.removeDuplicates();

console.log(JSON.stringify(list))