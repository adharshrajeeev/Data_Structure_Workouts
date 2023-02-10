class MaxBinaryHeap{
  constructor(){
    this.values=[];
  }
  insert(element){
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp(){
    let indx = this.values.length-1;
     const element=this.values[indx];
     while(indx >0){
      let parentIndex=Math.floor((indx-1)/2);
      let parent=this.values[parentIndex];
      if(element <=  parent) break;
      this.values[parentIndex]=element;
      this.values[indx]=parent;
      indx=parentIndex
     }
     console.log(this.values)
  }
}

let heap=new MaxBinaryHeap();

/////?/??////[41,39,33,18,27,12,55]
heap.insert(55); 
heap.insert(12); 
heap.insert(27); 
heap.insert(18); 
heap.insert(33); 
heap.insert(39); 
heap.insert(41); 
///////////////////////


// console.log(heap)