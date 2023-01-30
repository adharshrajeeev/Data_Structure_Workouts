class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}


class stack{
    constructor(){
        this.first=null;
        this.last=null;
        this.size=0
    }


    push(data){
        const newStack=new Node(data);
        if(!this.first){
            this.first=newStack;
            this.last=newStack;
        }else{
           var current=this.first;
           this.first=newStack;
           newStack.next=current
        }
        this.size++;
        return this;

    }

    pop(){
        if(!this.first) return null;

        if(this.first ===  this.last){
            this.last=null
        }
        let top=this.first;
        this.first=top.next;
        this.size--;
        return this
    }
}


const stack1=new stack();

stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(4);


console.log(JSON.stringify(stack1));

stack1.pop();
stack1.pop();

console.log(JSON.stringify(stack1));

