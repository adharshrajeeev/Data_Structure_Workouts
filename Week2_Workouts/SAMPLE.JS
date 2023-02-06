

// function merge(arr1,arr2){

//     let result=[];
//     let i=0;
//     let j=0;

//     while(i < arr1.length && j < arr2.length){
        
//     }
// }

// function mergeSort(arr){

//     if(arr.length< 2) return arr
//     let mid=Math.floor(arr.length/2);
//     let left=mergeSort(arr.splice(0,mid));
//     let right=mergeSort(arr.splice(mid));

//     return merge(left,right)
// }


let newArray=[5,2,5,9,5,2];

function bubbleSort(arr){
    for(var i=0;i<arr.length-1;i++){
        for(j=i+1;j<arr.length;i++){
            if(arr[i] > arr[j]){
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    
}