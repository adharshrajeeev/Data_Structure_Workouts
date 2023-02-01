// function insertionSort(arr){
//     for(var i=1;i<arr.length;i++){
//         var currentVal=arr[i];
//         for(var j=i-1;j >=0 && arr[j] >currentVal;j--){
//             arr[j+1]=currentVal
//         }
//         arr[j+1]=currentVal
//     }
//     return arr;
// }


// function insertSort(arr){
//     for(var i=1;i<arr.length;i++){
//         let numberToInsert =arr[i];
//         let j=i-1;
//         while(j >= 0 && arr[j] >  numberToInsert){
//           arr[j+1] = arr[j]
//             j =j-1
//         }
//         arr[j+1]=numberToInsert;

//     }
//     return arr
// }

// console.log(insertSort([0,1,9,67,4,2,8]))


function insertionSort(arr){
    for(var i=1;i<arr.length;i++){
        let key=arr[i];
        console.log("key="+key);
        var j
        for( j=i-1;(j >= 0 && arr[j] >  key);j--){
            arr[j+1]=arr[j]
        }
        arr[j+1]=key;
    }
    return arr
}


console.log(insertionSort([12,7,22,9,13]))