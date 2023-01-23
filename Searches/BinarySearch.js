const data=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];

// function binarySearch(arr,value){
//     let start=0;
//     let end=arr.length - 1;
//     let middle= Math.floor((start +  end) /  2); 
//     while(arr[middle]!==value && start<=end){
//         if(value < arr[middle]){
//             end=middle-1;
//         }else{
//             start=middle+1;
//         }
//         middle= Math.floor((start +  end) /  2); 
//     }
//     if(arr[middle] === value) {return console.log(`${middle}`)}
//     return console.log(`${-1}`);
// }

// binarySearch(data,100);

function binarySearch(arr,target){
    let start=0;
    let end=arr.length-1;
    while(start <= end){
        let middle=Math.floor((start+end)/2);

        if(target ===  arr[middle]) {
            return middle
        }
        if(target < arr[middle]){
            end=middle-1;

        }else{
            start=middle+1;

        }
    }
    return -1;   
}

console.log(binarySearch(data,5))