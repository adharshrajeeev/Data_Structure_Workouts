class hashTable{
    constructor(size){
        this.table=new Array(size);
        this.size=size
    }
}

const table=new hashTable(50);

console.log(table)