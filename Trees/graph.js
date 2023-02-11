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
}

const graph=new Graph();

graph.addVertex("tokio");
graph.addVertex("oman");
graph.addVertex("Saudi ");

console.log(graph)

graph.addEdge("tokio","oman");
graph.addEdge("Saudi","oman")

console.log(graph)