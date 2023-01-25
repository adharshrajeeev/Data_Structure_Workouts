var arr=[1,3,4,5,6,5,7,6];
var newArray=[]
var newSet=new Set()

for(let i=0;i<arr.length;i++){
    if(newSet.has(arr[i])){
        newArray.push(arr[i]);
    }else{

        newSet.add(arr[i]);
    }
     
}


console.log(newArray)

