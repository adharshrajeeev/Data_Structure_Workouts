var name="abcd";

var first=name.charCodeAt();
var second=name.charCodeAt(1);

function hash(arr,len){
 let total=0;
 for(let char of arr){
    let value=char.charCodeAt(0)-96;
    total=(total+value) % len
 }

 return total
}


