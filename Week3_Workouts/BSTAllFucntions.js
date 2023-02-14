class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null
    }
}

class BSTREE{
    constructor(){
        this.root=null
    }

    insertt(value){
        const newNode=new Node(value);
        if(this.root==null){
            this.root=newNode;
            return this
        }else{
            let current=this.root;
          while(true){
            if(value < current.value){
                if(current.left ===  null){
                    current.left=newNode;
                    return this
                }else{
                    current=current.left
                }
            }  
            else if(value > current.value){
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
        if(this.root ==  null){
            return false
        }
        let current=this.root;
        let found=false;
        while(!found && current){
            if(value < current.value){
                current=current.left
            }else if(value > current.value){
                current=current.right
            }else{
                found=true
            }
        }

        return current;
    }
}

const btree=new BSTREE();
btree.insertt(10);
btree.insertt(20);
btree.insertt(30);



console.log(JSON.stringify(btree));

console.log(btree.search(300))