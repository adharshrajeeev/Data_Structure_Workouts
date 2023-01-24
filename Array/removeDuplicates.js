var arr=[1,2,3,2,4,4,3,5,6,4,5];

function removeDuplicates(arr){
    obj={};
    var newArray=[];

    for(var i=0;i<arr.length;i++){
        if(!obj[arr[i]]){
            obj[arr[i]]=true;
            newArray.push(arr[i])
        }
    }

    return newArray;
}

console.log(removeDuplicates(arr))

