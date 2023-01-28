var arr=[1,3,4,5,6,6,7];

function LinearSearch(arr,target){
    for(var i=0;i<arr.length;i++){
        if(arr[i] == target){
           
            return `the position of the element is ${i+1}`
        }
    }

    return `value not found`;
}


function binarySearch(arr,target){
    let start=0;
    let end=arr.length-1;
    
    while(start <= end){
        let middle=Math.floor((start+end)/2);
        
        if(target === arr[middle]){
            return middle;
        }

        if(target < middle){
            end=middle-1;
        }else{
            start=middle+1;
        }
    }

    return -1


}

function arrSort(arr){  
    var temp=0;
    for(var i=0;i<arr.length-1;i++){
        for(var j=i+1;j<arr.length;j++){

         if(arr[i] > arr[j]){
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
         }

        }
    }
    return arr;
}


function removeDuplicateSet(arr){
    let newSet=new Set();
    let newArry=[]
    for(var i=0;i<arr.length;i++){
        newSet.add(arr[i]);
    }

     newArry=Array.from(newSet)
    return newArry;
}


function removeDuplicateFilter(arr){
    return arr.filter((item,index)=> arr.indexOf(item) ===  index)
}


console.log(removeDuplicateFilter([1,3,5,6,5,4,3,7,3,9,10,4]))