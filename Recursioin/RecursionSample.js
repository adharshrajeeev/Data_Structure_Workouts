function recursion(x){
    if(x==0){
        return;
    }
     console.log(x)
    recursion(x-1);
    


}


function logFunction(n){
    if(n==0) return 1

    n=Math.floor(n/2);
    console.log(n)
    logFunction(n);
}


console.log(logFunction(4))