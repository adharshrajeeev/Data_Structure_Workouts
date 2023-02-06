class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}


class Stack{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0
    }


    push(value){
        const newStack=new Node(value)
        if(!this.head){
            this.head=newStack;
            this.tail=newStack;
        }else{
            newStack.next=this.head;
            this.head=newStack;
        
        }
        this.size++;
        return this

    }
    pop(){
        if(!this.head)  return null;

        if(this.head==this.tail){
            this.tail=null;
        }

        this.head=this.head.next;
        this.size--
        return this
    }

    printallStack(){
        let current=this.head;
        while(current){
            console.log(current.value);
            current=current.next
        }
        return this
    }

    findMiddle(){
        let mid=Math.floor(this.size/2);
        let current=this.head;
        let count=0;
        while(count<mid){
            current=current.next;
            count++
        }
        console.log(current.value)

    }
}


const stack=new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

// console.log(JSON.stringify(stack))

// stack.pop()
// stack.pop()

// console.log(JSON.stringify(stack))
// stack.printallStack()
stack.findMiddle()