

function binarySearch(arr,target){
    
    let start=0;
    let end=arr.length-1;
    
   while(start<=end){
    let middle=Math.floor((start+end)/2);

    if(target ===  arr[middle]) return `value found at position  ${arr[middle]}`
 

    if(target < arr[middle]){
        end=middle-1;
        
    }else{
        start=middle+1;
    }
    
 }
 return `value not found`
}

console.log(binarySearch([1,2,3,4,5],5))

