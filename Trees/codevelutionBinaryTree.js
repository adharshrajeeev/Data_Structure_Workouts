class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null
    }
}


class BinarySearchTree{
    constructor(){
        this.root=null
    }


    isempty(){
        return this.root === null
    }


    insertNode(value){
        const newNode=new Node(value);
        if(this.root ===  null){
            this.root=newNode;
            return this
        }else{
            var current=this.root
           while(true){
            if(value <  current.value){
                if(current.left ===  null){
                    current.left=newNode;
                    return this
                }else{
                    current=current.left
                }
            }else if(value  > current.value){
                if(current.right ==  null){
                    current.right=newNode;
                    return this
                }else{
                    current=current.right
                }
            }
           }
        }
    }

    minNode(root){
        if(!root.left){
            return root.value
        }else{
            return this.minNode(root.left)
        }
    }


    maxNode(root){
        if(!root.right){
            return root.value
        }else{
            return this.maxNode(root.right)
        }
    }


    deleteNode(root,value){
      if(root === null){
        return root;
      } 
      if(value < root.value){
        root.left=this.deleteNode(root.left,value)
      }else if(value > root.value){
        root.right=this.deleteNode(root.right,value)
      }else{
        if(!root.left && !root.right){
            return null
        }
        if(!root.left){
            return root.right;
        }else if(!root.right){
            return root.left
        }
        root.value=this.minNode(root.right);
        root.right=this.deleteNode(root.right,root.value)
      }
      return root
    }
}


const tree=new BinarySearchTree();

tree.insertNode(10);
tree.insertNode(02);
tree.insertNode(1)
tree.insertNode(20);
tree.insertNode(30);

// console.log(JSON.stringify(tree))

// console.log(tree.minNode(tree.root))
// console.log(tree.maxNode(tree.root))

console.log(tree.deleteNode(tree.root,02));
