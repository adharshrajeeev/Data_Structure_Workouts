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

    deleteMinNode(){
        if(this.root === null) return null;

        let current=this.root;
        var previous=null;
        while(current.left){
            previous=current
            current=current.left;
        }
        previous.left=null
        return this;
    }
    minValue(root){
        var current=root;
        while(current.left!=null){
            current=current.left
        }

        return current.value
    }
    minRoot(root){
        var minv=root.value;
        while(root.left != null){
            minv =  root.left.value;
            root =  root.left;
        }
        return minv
    }
    maxRoot(){
        if(this.root === null) return null;

        let current=this.root;
        while(current.right){
            current=current.right;
        }
        return current;
    }

    delete(value){
        this.root=this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(root === null) return root;

        if(value < root.value){
            root.left=this.deleteNode(root.left,value)
        }else if(value > root.value){
            root.right=this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value=this.minValue(root.right);
            root.right=this.deleteNode(root.right,root.value)

        }
        return root
    }

    BFS(){
        var data=[];
        var queue=[];
        var node=this.root
        queue.push(node);
        while(queue.length){
         node= queue.shift();
         data.push(node.value);
         if(node.left){
            queue.push(node.left);
          }
          if(node.right){
            queue.push(node.right)
          }
        }
        return data
    }
    
    DFSPreOrder(){
        var data=[];
        var current=this.root;
        function traverse(node){
            data.push(node.value);
            if(node.left){
                traverse(node.left);
            }
            if(node.right){
                traverse(node.right)
            }
        }
        traverse(current)
        return data;
    }

    DFSPostOrder(){
        var data=[];
        var current=this.root;
        function traverse(node){
            if(node.left){
                traverse(node.left)
            }
            if(node.right){
                traverse(node.right)
            }
            data.push(node.value)
        } 
        traverse(current);
        return data
       
    }
    DFSInOrder(){
        var data=[];
        var current=this.root;
        function traverse(node){
            if(node.left) {
                traverse(node.left);
            }
            data.push(node.value);

            if(node.right) {
                traverse(node.right)
            }    
        }
        traverse(current);
        return data
    }
}

const tree=new BinarySearchTree();
tree.insertion(10);
tree.insertion(6);
tree.insertion(15);
tree.insertion(3);
tree.insertion(20);
tree.insertion(8);


console.log(tree.BFS())
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder()); 
console.log(tree.DFSInOrder())



