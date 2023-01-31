function insertionSort(arr){
    for(var i=1;i<arr.length;i++){
        var currentVal=arr[i];
        for(var j=i-1;j >=0 && arr[j] >currentVal;j--){
            arr[j+1]=currentVal
        }
        arr[j+1]=currentVal
    }
    return arr;
}


console.log(insertionSort([5,1,9,67,4,2,8]))