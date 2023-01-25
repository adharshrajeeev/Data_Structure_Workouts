var array=[5,7,1,6,0,9,1,45,64,2,12];


function sortArray(arr){
    let temp;
    for(var i=0;i<arr.length-1;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i] > arr[j]){
               temp=arr[i];
               arr[i]=arr[j];
               arr[j]=temp; 
            }
        }
    }
    return arr
}


console.log(array);

array.sort(function(a,b){
    return a-b;
});
console.log(array)
