var newArray=[2, 8, 1, 3, 6, 7, 5, 4]
var array1=[1,10,7];
var array2=[3,5,2];

function bubbleSort(arr){
    for(var i=0;i<arr.length-1;i++){
        for( var j=i+1;j<arr.length;j++){
            if(arr[i] > arr[j]){
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}

// console.log(bubbleSort(newArray))


function selectionSort(arr){
    for(var i=0;i<arr.length;i++){
        let lowest=i;
        for(var j=i+1;j<arr.length;j++){
            if(arr[lowest] > arr[j]){
                lowest=j
            }
        }
        var temp=arr[i];
        arr[i]=arr[lowest];
        arr[lowest]=temp
    }
    return arr
}

// console.log(selectionSort(newArray))


function insertionSort(arr){
    for(var i=1;i<arr.length;i++){
       var key=arr[i];
        for(var j=i-1;arr[j] > key && j>=0;j--){
            arr[j+1]=arr[j]
        }
        arr[j+1]=key
    }

    return arr;
}
 
// console.log(insertionSort(newArray))

const merge=(arr1,arr2)=>{
    let result=[];
    let i=0;
    let j=0;
    
    while(i< arr1.length && j < arr2.length){
        if(arr1[i] <= arr2[j]){
            result.push(arr1[i]);
            i++
        }else{
            result.push(arr2[j]);
            j++;
        }
    }

    while(i <arr1.length){
        result.push(arr1[i]);
        i++
    }
    while(j <arr2.length){
        result.push(arr2[j]);
        j++;
    }
    return result
}

function mergeSort(arr){

    if(arr.length <= 1) return arr

    let middle=Math.floor(arr.length/2);
    let left=mergeSort(arr.slice(0,middle));
    let right=mergeSort(arr.slice(middle));

    return merge(left,right)
}

console.log(mergeSort([1]))