//factorial of 5;
let num=5;

function factoriall(num){
    if(num ==  0) return 1
   

        return num * factoriall(num-1);
    
}
console.log(factoriall(num))