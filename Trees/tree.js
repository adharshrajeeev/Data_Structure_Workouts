class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null
    }
}

class BinarySearchTree{          //        10
    constructor(){               //     5       13
        this.root=null;          //   2   7   11    16
    }

    insert(value){
        var newNode=new Node(value);
        if(this.root === null){
            this.root=newNode;
            return this 
        }else{
            var current=this.root;
            while(true){
                if(value < current.value){
                    if(current.left === null){
                        current.left=newNode;
                        return this
                    }else{
                        current=current.left;
                    }
                }else if(value > current.value){
                    if(current.right ==  null){
                        current.right=newNode;
                        return this
                    }else{
                        current=current.right;
                    }
                }
            }
        }
    }
}


var tree=new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(2)
console.log(tree)
