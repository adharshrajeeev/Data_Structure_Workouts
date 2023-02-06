class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}

class stack{
    constructor(){
        this.first=null;
        this.last=null;
        this.size=0;
    }


    push(val){
        const newStack=new Node(val);
        if(this.first){
           let oldFirst=this.first;
           this.first=newStack;
           newStack.next=oldFirst 
        }else{
            this.first=newStack;
            this.last=newStack;
        }

        this.size++;
        return
    }

    pop(){
      if(this.first==this.last)  {
        this.last=null
      }
      this.first=this.first.next;
      this.size--;
    }
}


const newStack=new stack();

newStack.push(10);
newStack.push(20);
newStack.push(30);

console.log(newStack)
newStack.pop()
console.log(newStack)