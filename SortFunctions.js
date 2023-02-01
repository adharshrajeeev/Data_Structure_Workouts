var newArray=[2, 8, 1, 3, 6, 7, 5, 4]

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
        key=arr[i];
        for(var j=i-1;arr[j] > key && j>=0;j--){
            arr[j+1]=arr[j]
        }
        arr[j+1]=key
    }

    return arr
}

console.log(insertionSort(newArray))