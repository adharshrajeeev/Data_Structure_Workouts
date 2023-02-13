class MaxBinaryHeap{
 constructor(){
    this.values=[]
 }   

 insert(element){
    this.values.push(element);
    this.bubbleUp();    
 }
 bubbleUp(){
    let index=this.values.length-1;
    var element=this.values[index];
    while(index > 0){
        let parentIndex=Math.floor((index-1)/2);
        let parent=this.values[parentIndex];
       if(element <= parent) break;

       this.values[parentIndex]=element;
       this.values[index]=parent;
       index=parentIndex
    }
 }

 insertIntoMinHeap(element){
    this.values.push(element);
    this.bubbleDown();
 }

 bubbleDown(){
    let index=this.values.length-1;
    let element=this.values[index];
    while(index > 0){
        let parentIndex=Math.floor((index-1)/2);
        let parent=this.values[parentIndex];
       if(element >= parent) break;

       this.values[parentIndex]=element;
       this.values[index]=parent;
       index=parentIndex
    }
 }

}



  
let heap=new MaxBinaryHeap();

heap.insertIntoMinHeap(55);
heap.insertIntoMinHeap(29);
heap.insertIntoMinHeap(1);
heap.insertIntoMinHeap(100);
heap.insertIntoMinHeap(110);
heap.insertIntoMinHeap(0)
console.log(heap.values)
