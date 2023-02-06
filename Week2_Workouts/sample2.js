class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }

}

class SortLinked{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0
    }


    // push(data){

    //     const ne
    //     if(!this.head){
    //         this.head=
    //     }
    // }

    addSortOrder(data){

        let current=this.head;
        let previous=null
        while(current.next){
            previous=current;
           current= current.next;
           if(data < current.data && data > previous.data){
            
           }
        }
    }
}