//GENERAL TREEE

class Node{
    constructor(value){
        this.value=value;
        this.children=[];
    }
}

class Tree{
    constructor(){
        this.root=null
    }

    insertion(value,parentValue){
        const newNode=new Node(value);
        if(!this.root){
            this.root=newNode
        } else {
            let parentNode = this.find(parentValue);
            if (parentNode) {
              parentNode.children.push(newNode);
            } else {
              console.log("Parent node not found");
            }
          }
    }

    find(value) {
        let queue = [this.root];
        while (queue.length) {
          let node = queue.shift();
          if (node.value === value) {
            return node;
          }
          queue = queue.concat(node.children);
        }
        return null;
      }
}


const gtree=new Tree();

gtree.insertion(10,gtree.root);
gtree.insertion(20,10);
gtree.insertion(30,20)
console.log(JSON.stringify(gtree))