
let numberArray=[0,6,7,1,5,9,71,8]

function getMinMax(arr,n){
    let minMax=new Array();
  let minValue=arr[0];
  let maxValue=arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
        minValue = arr[i];
    }
    if (arr[i] > maxValue) {
        maxValue = arr[i];
    }
    }
    minMax[0]=minValue,
    minMax[1]=maxValue
    return minMax
}


console.log(getMinMax(numberArray))