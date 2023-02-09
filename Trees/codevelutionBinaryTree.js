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
}


const tree=new BinarySearchTree();

console.log(tree.isempty());