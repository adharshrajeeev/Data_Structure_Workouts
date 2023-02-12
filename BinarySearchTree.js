class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root=null
    }


    insertion(value){
        const newNode=new Node(value);
       if(this.root===null){
        this.root=newNode
        return this
       }else{
            let current=this.root;
            while(true){
              if(value === current.value) return undefined;
              
              if(value < current.value){
                if(current.left === null){
                    current.left=newNode;
                    return this
                }else{
                    current=current.left
                }
              }else if(value > current.value){
                if(current.right === null){
                    current.right=newNode;
                    return this
                }else{
                    current=current.right
                }
              }
            }

       }

    }

    search(value){
        if(this.root === null){
            return false
        }

        let current=this.root;
        let found=false

        while(!found && current){
            if(value < current.value){
                current=current.left;
            }else if(value >  current.value){
                current=current.right
            }else{
                found=true
            }
        }
        return current;
    }

    maxElement(){
        if(this.root === null) return null;

        let current=this.root;
        while(current.right){
            current=current.right;
        }
        return current;
    }
}

const tree=new BinarySearchTree();
tree.insertion(10);
tree.insertion(20);
tree.insertion(30);
tree.insertion(40);
tree.insertion(50);
tree.insertion(56);
tree.insertion(57);
tree.insertion(58);
tree.insertion(60);

console.log(JSON.stringify(tree));

console.log(tree.maxElement())






