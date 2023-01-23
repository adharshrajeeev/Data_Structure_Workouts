arr=[1,3,4,5,6];

function findSome(array,t){
    var out=[]
    for(var i=0;i<array.length-1;i++){
    for(var j=1;j<array.length;j++){
        if(array[i]+array[j]==t){
            out.push(i)
            out.push(j)
            return out
        }
    }
}
    return -1
}



console.log(findSome(arr,10));