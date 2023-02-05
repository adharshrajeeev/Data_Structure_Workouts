class HashTable{
    constructor(size=50){
        this.table=new Array(size);
        this.size=size
    }

    hash(key){ //type string
       let total=0;
       for(var i=0;i<key.length;i++){
        total+=key.charCodeAt(i)
       } 
       return total % this.size
    } 
    
    set(key,value){
        const index=this.hash(key);
        this.table[index]=value;
        
    }

    get(key){
        const index=this.hash(key);
        return this.table[index]
    }

    remove(key){
        const index=this.hash(key);
        this.table[index]=undefined
    }

    display(){
        for(var i=0;i<this.table.length;i++){
            console.log("index:",i,"value:",this.table[i])
        }
    }

    getCollision(key){
        const index=this.hash(key);

        const bucket=this.table[index];

        if(bucket){
            const sameKeyItem=bucket.find(item => item[0] == key);
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined
    }

    setCollission(key,value){
        const index=this.hash(key)
        const bucket=this.table[index];
        if(bucket){
          this.table[index]=[[key,value]]
        }else{
            const sameKeyItem=bucket.find(item => item[0] === key);
            if(sameKeyItem){
                sameKeyItem[1]=value
            }else{
                bucket.push([key,value])
            }
        }
    }

}


const table=new HashTable(50);

table.set("name","adharsh");
table.set("age",22);


console.log(table.get("age"))
table.display()


