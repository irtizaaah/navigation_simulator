import "./app.css";
import Grid from "../grid/grid";
import GridGraph from "../../algorithm/grid-graph";
import DijkstrasAlgorithm from "../../algorithm/dijkstra-algorithm";
import Button from "../button/button";
import {useState} from 'react'

function App() {

  const [numOfVisitedNodes, setNumOfVisitedNodes] = useState(0);
  const [visitedNodesSoFar, setVisitedNodesSoFar] = useState([]);

  const numOfNodesPerSide = 15; // warning! CSS grid (grid.css) builds the square grid using this value
  const numOfTotalNodes = numOfNodesPerSide * numOfNodesPerSide; // builds a square grid (sq. area = side * side)
  
  const graph = new GridGraph(numOfNodesPerSide); 
  /* 
    - this buids a graph using the nodes
    - every adjacent node has a edge connecting them
    - the default weight for every edge is 1
    - every node is numbered in order
  */
  const path = new DijkstrasAlgorithm(graph, 0, 30);
  const directions = [path.getShortestPath()]; // returns array of directions to shortest path
  const visitedNodesInOrder = [...path.getVisitedNodesInOrder()]; // copy return array into this array

  return (
    <div className = "app_container">
      <Grid 
        numOfTotalNodes = {numOfTotalNodes}
        numOfVisitedNodes = {numOfVisitedNodes}
        visitedNodesInOrder = {[...visitedNodesInOrder]}
        visitedNodesSoFar = {[...visitedNodesSoFar]}
      />
      <Button 
        name = "Navigate"
        numOfVisitedNodes = {numOfVisitedNodes}
        setNumOfVisitedNodes = {setNumOfVisitedNodes}
        visitedNodesSoFar = {visitedNodesSoFar}
        setVisitedNodesSoFar = {setVisitedNodesSoFar}
        visitedNodesInOrder = {visitedNodesInOrder}
      />
    </div>
  );
}

export default App;