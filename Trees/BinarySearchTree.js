class Node{
    constructor(value){
        this.value=value;
        this.right=null;
        this.left=null
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null;
    }


    insertinto(value){
        const newNode=new Node(value)
        if(this.root === null){
            this.root=newNode;
            return this
        }else{
            var current=this.root;
            while(true){
                if(value <  current.value){
                    if(current.left ===  null){
                        current.left=newNode
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
}

const bstree=new BinarySearchTree();
bstree.insertinto(10);
bstree.insertinto(20);
bstree.insertinto(5);
bstree.insertinto(30);
bstree.insertinto(1);

console.log(JSON.stringify(bstree))