import "./app.css";
import Grid from "../grid/grid";
import Graph from "../../algorithm/graph";
import DijkstrasAlgorithm from "../../algorithm/dijsktras-algorithm";

function App() {
  const numOfNodesPerSide = 15; // warning! CSS grid (grid.css) builds the square grid using this value
  const numOfTotalNodes = numOfNodesPerSide * numOfNodesPerSide; // builds a square grid (sq. area = side * side)
  
  const graph = new Graph(numOfNodesPerSide); 
  const path = new DijkstrasAlgorithm(graph, 0, 224);
  const directions = path.getShortestPath(); // returns directions to shortest path
  const visitedNodesInOrder = path.getVisitedNodesInOrder();



  /* 
  - this buids a graph using the nodes
  - every adjacent node has a edge connecting them
  - the default weight for every edge is 1
  - every node is numbered in order
  */

  return (
    <div className = "app-container">
      <Grid numOfTotalNodes = {numOfTotalNodes} />
    </div>
  );
}

export default App;