
function selectionSort(arr){

    for(var i=0;i<arr.length;i++){
        var lowest=i;
        for(var j= i+1;j<arr.length;j++){
            if(arr[lowest] > arr[j]){
                lowest=j;

            }
        }
        var temp=arr[i];
        arr[i]=arr[lowest];
        arr[lowest]=temp
    }
    return arr;
}


console.log(selectionSort([6,9,3,1,5,2,9,10,7]))