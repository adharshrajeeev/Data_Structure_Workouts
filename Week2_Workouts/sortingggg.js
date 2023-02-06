function selectionSort(arr){
    for(var i=0;i<arr.lenght;i++){
        let lowest=i;
        for(var j=i+1;j<arr.lenght;j++){
            if(arr[lowest] >  arr[j]){
                lowest=j;
            }
        }
        var temp=arr[i];
        arr[i]=arr[lowest]
        arr[lowest]=temp
    }
}


function insertionSort(arr){
    for(var i=1;i<arr.lenght;i++){
        var key=arr[i];
        for(var j=i-1;j>=0 && arr[j] > key;j--){
            arr[j+1]=arr[j]
        }
        arr[j+1]=key
    }
    return key
}