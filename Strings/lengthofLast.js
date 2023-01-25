
function findLengthofLast(s){
    var name="";
    const words=s.trim();
    for(var i=words.length-1;words>0;i++){
        if(s[i] === " "){
            for(var j=words[i+1];j<words.length;j--)
            {
                name=name+j[i]
            }
        }
    }
    return name
   
}

console.log(findLengthofLast("hello world this is indiaaaaaaa"))