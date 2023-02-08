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

    find(value){
        if(this.root == null) return false;

        var current=this.root;
        var found=false;
        while(!found && current){
            if(value < current.value){
                current=current.left
            }else if(value > current.value){
                current=current.right;
            }else{
                found=true;
            }
        }
        return current;
    }

    breadthFirstSearch(){
        var data=[];
        var queue=[];
        var node=this.root;
        queue.push(node)
        while(queue.length){
          node = queue.shift()
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

    depthFirstSearchPreOrder(){
        var data=[];
        var current=this.root;
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current)
        return data;
    }

    depthFirstSearchPostOrder(){
        var data=[];
        var current=this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value)
        }
        traverse(current);
        return data
    }

    depthFirstSearchInOrder(){
        var data=[];
        var current=this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
             
        }
        traverse(current);
        return data;
    }
}



var tree=new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(2); 
tree.insert(40);
tree.insert(23);

// console.log(tree.find(34))
// console.log(tree.breadthFirstSearch())
// console.log(JSON.stringify(tree))

// console.log(tree.depthFirstSearchPreOrder());
// console.log(tree.depthFirstSearchPostOrder());


console.log(tree.depthFirstSearchInOrder());


