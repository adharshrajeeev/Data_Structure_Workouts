function bubblesort(arr){
    for(var i=0;i<arr.length-1;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i] > arr[j]){
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp
            }
        }
    }

    return arr;
}
// console.log(bubblesort([10,2,6,4,8,3,9,7,1]))


function selectionSort(arr){
    for(var i=0;i<arr.length;i++){
        var lowest=i;

        for(var j=i+1;j<arr.length;j++){
            if(arr[lowest] >  arr[j]){
                lowest=j;
            }
        }

        var temp=arr[i];
        arr[i]=arr[lowest];
        arr[lowest]=temp

    }

    return arr
}


// console.log(selectionSort([10,2,6,4,8,3,9,7,1]))


function insertionSort(arr){
    for(var i=1;i<arr.length;i++){
        var key=arr[i];
        var arry=arr
        for(j=i-1;j>=0 && arr[j] > key;j--){
            arr[j+1]=arr[j]
            var inside=arr
        }
        arr[j+1]=key;
        var arry2=arr

    }
    return arr
}


// console.log(insertionSort([10,6,7,4,2]))

function quickSort(arr){
    if(arr.length < 2) return arr;

    let pivot=arr[arr.length-1];
    let left=[];
    let right=[];

    for(var i=0;i<arr.length-1;i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i])
        }
    }

    return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort([10,6,4,7,2]))