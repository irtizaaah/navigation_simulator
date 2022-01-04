import "./grid.css";
import Node from "./node";
import Graph from "../algorithm/graph";

function Grid() {
    const numOfNodesPerSide = 15; // warning! CSS grid (grid.css) builds the square grid using this value
    const numOfTotalNodes = numOfNodesPerSide * numOfNodesPerSide; // builds a square grid (sq. area = side * side)
    
    const graph = new Graph(numOfNodesPerSide);  
    /* 
    - this buids a graph using the nodes
    - every adjacent node has a edge connecting them
    - the default weight for every edge is 1
    - every node is numbered in order
    */

    const grid = [];
    for(let i = 0; i < numOfTotalNodes; i++){
        grid.push(<Node name = {i}/>);
    }

    return(
        <div 
            className = "grid-container"
        >
            {grid}
        </div>
    );
}

export default Grid;

