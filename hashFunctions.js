//Hash Table Impletations

class HashTable{ 
    constructor(size){
        this.data=new Array(size)
    }


    hashing(key){
        let hash=0;
        for(let i=0;i<key.length;i++){
            hash=(hash +  key.charCode(i) * i) % this.data.length
        }

        return hash;
    }
}

const myHashTable =  new HashTable(10);

console.log(myHashTable)