//g.addVertex("Tokyo") 
   // {
//        "Tokyo": []
//    }

class Graph {
    constructor() {
        this.adjacencyList = {}; 
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []; 
        }
    }
    
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2); 
        this.adjacencyList[v2].push(v1); 
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(
            v => v !== v2
        );
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(
            v => v !== v1
        );
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop(); 
            this.removeEdge(vertex, adjacentVertex); 
        }
        delete this.adjacencyList[vertex]; 

    }

    depthFirstRecursive(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex){  //Vertex = A ///Vertext = B  //vertex = D
            if(!vertex) return null;
            visited[vertex] = true; //A true //B true
            result.push(vertex); //A in result //B in result
            adjacencyList[vertex].forEach(neighbor => {  //B //A & D
                if(!visited[neighbor]){  //not B  // A is true  //return D
                    return dfs(neighbor) //return def of B
                }
            });
        })(start);

        return result;
    }

    depthFirstIterative(start) {
        const stack = [start]; 
        const result = [];
        const visited = {};
        let currentVertex; 

        visited[start] = true; 
        while(stack.length) {
            console.log(stack); 
            currentVertex = stack.pop(); 
            result.push(currentVertex); 

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true; 
                    stack.push(neighbor)
                }
            }); 
        }
        return result; 
    }

    breadthFirst(start) {
        const queue = [start];
        const result = []; 
        const visited = {}; 
        let currentVertex; 
        
        while(queue.length) {
            currentVertex = queue.shift(); 
            result.push(currentVertex); 

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true; 
                    queue.push()
                }
            })
        }
        return result; 

    }



}

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F