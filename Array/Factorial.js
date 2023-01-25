function findFactorial(n){
   if(n==0 || n==1) return 1;
   return n* findFactorial(n-1)
}


function Factorials(n){
    let fact=1;
    for(var i=n;i>=1;i--){
        fact=fact*i;
    }
    return fact
}


console.log(Factorials(5));


