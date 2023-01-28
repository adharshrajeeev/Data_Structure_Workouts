//factorial of 5;
let num=5;

function factoriall(num){
    if(num ==  0){ return 1}
    else{

        return num * factoriall(num-1);
    }
}

const resul=factoriall(num);

console.log(resul)