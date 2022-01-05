class Graph{ // builds a graph of vertices and edges representing a sqaure grid of nodes
    constructor(numOfVerticesPerSide){
        this.numOfVerticesPerSide = numOfVerticesPerSide // builds a square grid (sq. area = side * side)
        this.numOfTotalVertices = this.numOfVerticesPerSide * this.numOfVerticesPerSide; 
        this.vertices = [];
        this.adjacencyMatrix = []; 
        /* 
            - only used to keep track of weight between vertices (not adjacent vertices)
            - adjacent vertices can be calculated in constant time
                due to the nature of the grid arrangement (see more in getNeighbors())
        */
        this._createGraph();
    }

    getNumOfTotalVertices(){
        return this.numOfTotalVertices;
    }

    getVertex(i){
        return this.vertices[i];
    }

    getWeight(vertex,neighbor){
        return this.adjacencyMatrix[vertex][neighbor];
    }

    getNeighbors(vertex){

        const neighbors = [];

        if((vertex + 1 < this.numOfTotalVertices) & ((vertex+1) % this.numOfVerticesPerSide !== 0)){ // check if right node exists
            neighbors.push(vertex+1);
        }

        if((vertex - 1 >= 0) & ((vertex % this.numOfVerticesPerSide) !== 0)){ // check if left node exists 
            neighbors.push(vertex-1);
        }

        if((vertex + this.numOfVerticesPerSide) < this.numOfTotalVertices){ // check if top node exists
            neighbors.push(vertex+this.numOfVerticesPerSide);
        }

        if((vertex - this.numOfVerticesPerSide) >= 0){ // check if bottom node exists
            neighbors.push(vertex-this.numOfVerticesPerSide);
        }

        return neighbors;
    }

    _createGraph(){
        for (var i = 0; i < this.numOfTotalVertices; i++) { // declares and initializes a 2d array
            this.adjacencyMatrix[i] = Array(this.numOfVerticesPerSide).fill(0);
        }

        for(let i = 0; i < this.numOfTotalVertices; i++){ // fills 2d array and creates graph
            this.addVertex(i)
        }

        for(let i = 0; i < this.numOfTotalVertices; i++){ // replace undefined with 0
            for(let j = 0; j < this.numOfTotalVertices; j++){ // replace undefined with 0
                if(this.adjacencyMatrix[i][j] === null || this.adjacencyMatrix[i][j] === undefined){
                    this.adjacencyMatrix[i][j] = 0;
                }
            }
        }
        
    }

    addVertex(vertex, weight = 1){ // connect node to surrounding nodes with given weight
        this.vertices.push(vertex);

        this.adjacencyMatrix[vertex][vertex] = 0; 

        if((vertex + 1 < this.numOfTotalVertices) & ((vertex+1) % this.numOfVerticesPerSide !== 0)){ // check if right node exists
            this.adjacencyMatrix[vertex][vertex+1] = weight;
        }

        if((vertex - 1 >= 0) & ((vertex % this.numOfVerticesPerSide) !== 0)){ // check if left node exists 
            this.adjacencyMatrix[vertex][vertex-1] = weight;
        }

        if((vertex + this.numOfVerticesPerSide) < this.numOfTotalVertices){ // check if top node exists
            this.adjacencyMatrix[vertex][vertex+this.numOfVerticesPerSide] = weight;
        }

        if((vertex - this.numOfVerticesPerSide) >= 0){ // check if bottom node exists
            this.adjacencyMatrix[vertex][vertex-this.numOfVerticesPerSide] = weight;
        }
    }

    changeWeight(vertex, weight){ // change weight of edge between surrounding nodes and given node
        if((vertex + 1) < this.numOfTotalVertices){ // check if right node exists
            this.adjacencyMatrix[vertex+1][vertex] = weight;
            this.adjacencyMatrix[vertex][vertex+1] = weight;
        }

        if((vertex - 1) >= 0){ // check if left node exists 
            this.adjacencyMatrix[vertex-1][vertex] = weight;
            this.adjacencyMatrix[vertex][vertex-1] = weight;
        }

        if((vertex + this.numOfVerticesPerSide) < this.numOfTotalVertices){ // check if top node exists
            this.adjacencyMatrix[vertex+this.numOfVerticesPerSide][vertex] = weight;
            this.adjacencyMatrix[vertex][vertex+this.numOfVerticesPerSide] = weight;
        }

        if((vertex - this.numOfVerticesPerSide) >= 0){ // check if bottom node exists
            this.adjacencyMatrix[vertex-this.numOfVerticesPerSide][vertex] = weight;
            this.adjacencyMatrix[vertex][vertex-this.numOfVerticesPerSide] = weight;
        }
    }
}

export default Graph;