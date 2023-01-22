//remove duplicates from  sorted array


let nums=[0,0,1,1,1,2,2,3,3,4];


 function removeDuplicates(arr){
    for(var i=0;i<arr.length-1;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                arr[i]=arr[j];
                               
            }
        }
    }
}

removeDuplicates(nums);


console.log(nums)
