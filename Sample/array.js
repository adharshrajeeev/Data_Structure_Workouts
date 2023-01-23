var arr=[5,2,1,4,7];

function printArray(array){
    for(var i=0;i<array.length;i++){

        var arrString=arr[i];
        console.log(arrString);
    }
}

// printArray(arr);



function insertAtend(item){
    arr[arr.length]=item;
    // printArray(arr);
}

insertAtend(10);


function insertAtBegining(item){

    for(var i=arr.length;i>0;i--){
        arr[i]=arr[i-1];
    }
    arr[i]=item;

    printArray(arr)
    
}
1
// insertAtBegining(100);


console.log(arr);



function insertAtPositin(item,pos){

    for(var i=arr.length;i>pos;i--){
        arr[i]=arr[i-1]

    }

    arr[i]=item
    
}


function searchInArray(item){

    for(var i=0;i<arr.length;i++){
        if(arr[i]==item){
            return i;
        }
    }
    return -1;

}




// console.log(searchInArray(5));


function sortArray(){
    var temp=0;
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
               temp=arr[i];
               arr[i]=arr[j];
               arr[j]=temp; 
            }
        }
    }

}


sortArray();

console.log("sorted arrat is ",arr) 


function binarySearch(item){ // works on  sortted array;


}