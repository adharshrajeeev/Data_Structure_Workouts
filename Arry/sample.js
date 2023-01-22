let node1={
    data:50,
    next:null,
    // prev:null
}


let node2={
    data:80,
    // prev:node1,
    next:null
}



node1.next=node2;

console.log(node1)