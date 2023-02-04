var stack=[];

stack.push("google.com");
stack.push("instagram");
stack.push("youtubve");
stack.push("chatGpt");
stack.push("linkedin");

function deleteMiddle(stack){
 var middle=Math.floor(stack.length/2);
 var newArry=[]
  for(var i=0;i<stack.length;i++){
    if(i!=middle){
        newArry.push(stack[i])
    }
  }
  return newArry
    
}

console.log(deleteMiddle(stack))


