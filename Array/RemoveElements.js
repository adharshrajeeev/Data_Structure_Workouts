var arr=[3,2,2,3];

function removeElements(arr,target){
    var newArray=[];
    for(i=0;i<arr.length;i++){
        if(arr[i] !== target){
            newArray.push(arr[i])
        }
    }
    
    return newArray;

}


console.log(removeElements(arr,3));