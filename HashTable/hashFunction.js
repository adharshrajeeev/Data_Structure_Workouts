//hashing a strings ;

function hash(key,arrayLen){
    let total=0;
    for(let char of key){
        let value=char.charCodeAt(0)-96;
        total=(total+value) % arrayLen
    }

    return total;
}


console.log(hash("pink",10))
console.log(hash("red",10))
console.log(hash("yellow",10))