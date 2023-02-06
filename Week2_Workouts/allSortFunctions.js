function bubbleSort(arr){
    
   for(var i=0;i<arr.length-1;i++){
    var first=arr[i]
    for(var j=i+1;j<arr.length;j++){
    var second=arr[j]
    
        if(arr[i] > arr[j]){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
   }
   return arr;
}
// console.log(bubbleSort([10,2,8,9,4,5,1]));

function selectionSort(arr){
    for(var i=0;i<arr.length;i++){
        let lowest=i;
        for(j=i+1;j<arr.length;j++){
            if(arr[lowest] > arr[j]){
                lowest=j
            }
        }
        var temp=arr[i];
        arr[i]=arr[lowest];
        arr[lowest]=temp
    }

    return arr;
}

// console.log(selectionSort([10,2,8,9,4,5,1]))


function insertionSort(arr){
    for(var i=1;i<arr.length;i++){
        var key=arr[i];

         for(var j=i-1;arr[j] > key && j>=0;j--){
             arr[j+1]=arr[j]
             
         }
         arr[j+1]=key;
         
     }
 
     return arr;
}

console.log(insertionSort([10,2,8,9,4,5,1]))