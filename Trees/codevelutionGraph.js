//  const matrix=[
//     [0,1,0],
//     [1,0,1],
//     [0,1,0]
// ]
//  console.table(matrix)

//ADJACENCY LIST
// Vertices are stored in a map like data struture and every vertex stores a list of its adjacent vertices

var adjacentList={

    'A':['B'],
    'B':['A','C'],
    'C':['B']
}


console.table(adjacentList)