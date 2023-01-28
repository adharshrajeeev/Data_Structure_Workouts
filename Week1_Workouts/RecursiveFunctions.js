function counter(n){
   if(n==0){
    return 0;
   }
   return n + counter(n-1)
}

console.log(counter(10))