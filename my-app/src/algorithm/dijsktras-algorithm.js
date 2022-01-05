class DijkstrasAlgorithm{
    constructor(graph, startVertex = 0, endVertex = graph.getNumOfTotalVertices()-1){

        this.path = ""; // to print path

        this.startVertex = startVertex; // source
        this.endVertex = endVertex; // destination

        this.graph = graph;
        this.numOfTotalVertices = this.graph.getNumOfTotalVertices(); 
        this.shortestDistances = new Array(this.numOfTotalVertices);
        // stores shortest distance ("weight") from source to ith vertex (array index =  vertex name)

        this.processed = new Array(this.numOfTotalVertices);
        // list of vertices whose neighbors are all visited

        this.nearestNeighbor = this.startVertex; // alternative method
        // the neighbor with the min distance

        this.parents = new Array(this.numOfTotalVertices);
        // the vertex pointing to the ith vertex / the parent of the ith vertex (array index = vertex name)

        this.NO_PARENT = -1;
        // -1 is a sort of null value since disjktra can't compute negative values

        this._initializeDistances();
    }

    _initializeDistances(){ 
        //create and initialize a list of min distances and parents the size of the entire grid
        for(let vertex = 0; vertex < this.numOfTotalVertices; vertex++){
            this.shortestDistances[vertex] = Infinity;
            this.processed[vertex] = false;
        }

        this.shortestDistances[this.startVertex] = 0;
        this.parents[this.startVertex] = this.NO_PARENT;
    }
    _printPath(neighbor){
        //this._getPath(this.parents, neighbor);
        this.path = this.path + neighbor
        this.path = this.path + "\n";
    }

    _getPath(parents, destination){
        if (destination === this.NO_PARENT){
            return;
        }
        this._getPath(parents, parents[destination]);
        this.path = this.path + destination + " ";
    }

    _processNeighbors(vertex, neighbors){ 

        let sourceToVertex; // the distance from the source to the vertex
        let vertexToNeighbor; // the distance from the vertex to the neighbor
        let distance; // the total distance from source to neighbor

        let indexDistanceIsShorter;
        let vertexHasBeenProcessed;

        for(let i = 0; i < neighbors.length; i++){ 
            sourceToVertex = this.shortestDistances[vertex];
            vertexToNeighbor = this.graph.getWeight(vertex, neighbors[i]); 

            if (vertexToNeighbor > 0){ 
                distance = sourceToVertex + vertexToNeighbor;

                vertexHasBeenProcessed = this.processed[neighbors[i]];
                indexDistanceIsShorter = distance < this.shortestDistances[neighbors[i]];
        
                if(vertexHasBeenProcessed !== true & indexDistanceIsShorter === true){
                    // don't look over processed vertices or vertices with longer distances
                    this.parents[neighbors[i]] = vertex;
                    this.shortestDistances[neighbors[i]] = distance; 
                    this.nearestNeighbor = neighbors[i]; // alternative method
                    this._printPath(neighbors[i]);
                }
            }
        }
    }

    getShortestPath(){
        let neighbors = [];
        let vertex = this.startVertex;

        for(let i = this.startVertex; i < this.endVertex; i++){ // for every vertex
            vertex = this.nearestNeighbor; 
            // vertex = i;
            /*
                pick either vertex = i or vertex = this.nearestNeighbor 
            */

            neighbors = this.graph.getNeighbors(vertex); // list of vertex's neighbors
            this._processNeighbors(vertex, neighbors);
            /* 
                - find the shortest distance needed to get to every neighbor from the source
                    through this vertex (min distance)
                - store the vertex pointing to it's neighbor (parent)
            */
            this.processed[vertex] = true; // ith vertex has been processed
        }
    }
}

export default DijkstrasAlgorithm;