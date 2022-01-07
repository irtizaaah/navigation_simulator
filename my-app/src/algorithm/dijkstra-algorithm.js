class Node{
    constructor(index = null, distance = Infinity, neighbor = [], previous = null){
        this.index = index;
        this.previous = previous;
        this.distance = distance; 
        this.neighbor = neighbor;
    }

    setIndex(index){
        this.index = index;
    }
    setPrevious(previous){
        this.previous = previous;
    }
    setDistance(distance){
        this.distance = distance;
    }
    setNeighbor(neighbor){
        this.neighbor = neighbor;
    }
    
    getIndex(){
        return this.index;
    }
    getPrevious(){
        return this.previous;
    }
    getDistance(){
        return this.distance;
    }   
    getNeighbors(){
        return this.neighbor;
    }
}

class DijkstrasAlgorithm{
    constructor(graph, startNodeIndex, endNodeIndex){

        // CONSTANTS
        this.NO_PARENT_NODE = -1;

        // VARIABLES
        this.graph = graph;
        this.numOfNodes = this.graph.getNumOfTotalNodes();
        this.startNodeIndex = startNodeIndex;
        this.endNodeIndex = endNodeIndex;

        this.unvisitedNodes = [];
        this.visitedNodes = [];
        this._initializeUnvisitedNodes();
        /*
            - stores node objects (contains an index, it's current shortest distance from start node, all it's neighbor nodes, it's previous node)
            - sorted from shortest to longest distance from source
        */
        
        // LISTS FOR OUTPUT
        this.directions = []; // directions to the shortest path
        this.visitedNodesInOrder = []; // list of nodes visited in order

        // INITIALIZE SOURCE NODE
        this._initializeStartNode();
    }
    _initializeUnvisitedNodes(){
        let neighbors;
        for(let i = 0; i < this.numOfNodes; i++){
            neighbors = this.graph.getAllNeighbors(i)
            this.unvisitedNodes.push(new Node(i, Infinity, neighbors));
        }
    }
    _initializeStartNode(){
        this.unvisitedNodes[this.startNodeIndex].setDistance(0);
        this.unvisitedNodes[this.startNodeIndex].setPrevious(this.NO_PARENT_NODE);
    }

    getShortestPath(){
        let currentNode = this.unvisitedNodes[this.startNodeIndex];

        while(this.unvisitedNodes.length !== 0){ // *** add end vertex condition

            this.unvisitedNodes.sort(function(nodeA, nodeB){return nodeA.distance - nodeB.distance}); // sort distances from source to current node ascendingly 
            currentNode = this.unvisitedNodes.shift(); // remove node with shortest distance and make it the current node
            this.visitedNodes.push(currentNode); // push current node to visited nodes
            this._updateVisitedNodesInOrder(currentNode.getIndex()); // record node having been visited
            this._relaxNeighbors(currentNode); // update current's neighbors' shortest distances
        }
    }

    _relaxNeighbors(currentNode){
        const neighbors = currentNode.getNeighbors();
        let neighbor;

        let sourceToCurrentDistance; // distance from source to current vertex
        let currentToNeighborDistance; // distance from current vertex to neighbor
        let sourceToNeighborDistance; // total distance from source to neighbor
        let currentSourceToNeighborDistance; // current shortest distance from source to neighbor

        let newDistanceIsShorter; // is new distance < current shortest distance?
        let isUnvisited = false; // has the neighbor already been visited

        for(let i = 0; i < neighbors.length; i++){ 

            neighbor = this._getNodeFromUnvisitedList(neighbors[i]);

            if (neighbor !== undefined){
        
                this._updateVisitedNodesInOrder(neighbor.getIndex()); // record neighbors having been visited
    
                // CALCULATE DISTANCE
                sourceToCurrentDistance = currentNode.getDistance();
                currentToNeighborDistance = this.graph.getWeight(currentNode.getIndex(), neighbor.getIndex()); 
                sourceToNeighborDistance = sourceToCurrentDistance + currentToNeighborDistance;
    
                // CONDITIONS
                currentSourceToNeighborDistance = neighbor.getDistance();
                newDistanceIsShorter = sourceToNeighborDistance < currentSourceToNeighborDistance;
                isUnvisited = this.unvisitedNodes.includes(neighbor);
        
                // UPDATE NEIGHBOR
                if(newDistanceIsShorter === true && isUnvisited === true){ 
                    neighbor.setDistance(sourceToNeighborDistance);
                    neighbor.setPrevious(currentNode.getIndex());
                }
            }
        }
    }

    _getNodeFromUnvisitedList(nodeIndex){
        for(let i = 0; i < this.unvisitedNodes.length; i++){
            if(this.unvisitedNodes[i].getIndex() === nodeIndex){
                return this.unvisitedNodes[i];
            }
        }
    }

    _updateVisitedNodesInOrder(node){
        this.visitedNodesInOrder.push(node);
    }

    getVisitedNodesInOrder(){
        return this.visitedNodesInOrder;
    }

    _getDirections(){
        this._backtrack(this.endVertex);
        return this.directions;
    }

    _backtrack(destinationNode){
        if (destinationNode === this.NO_PARENT){
            return;
        }
        this.directions.push(destinationNode);
        this._backtrack(this.previousVertices[destinationNode]);
    }
}

export default DijkstrasAlgorithm;