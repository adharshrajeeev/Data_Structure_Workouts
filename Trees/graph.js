class Graph{
    constructor(){
        this.adjacencyList={}
    }

    addVertex(vertex){
      if(!this.adjacencyList[vertex]) this.adjacencyList[vertex]=[]
    }

    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    
    removeEdge(v1,v2){
        this.adjacencyList[v1]=this.adjacencyList[v1].filter(v=>v!=v2)
        this.adjacencyList[v2]=this.adjacencyList[v2].filter(v=>v!=v2)
    }
}

const graph=new Graph();

graph.addVertex("tokio");
graph.addVertex("oman");
graph.addVertex("Saudi ");



graph.addEdge("tokio","oman");


console.log(graph)
graph.removeEdge("tokio","oman");

console.log(graph)