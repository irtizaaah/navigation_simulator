import "./app.css";
import GridGraph from "../../algorithm/grid-graph";
import DijkstrasAlgorithm from "../../algorithm/dijkstra-algorithm";
import Grid from "../grid/grid";
import Menu from "../menu/menu";
import {useState} from 'react';

function App() {
  // GRID UI
  const NUM_OF_NODES_PER_SIDE = 20; // warning! CSS grid (grid.css) builds the square grid using this value
  const NUM_OF_TOTAL_NODES = NUM_OF_NODES_PER_SIDE * NUM_OF_NODES_PER_SIDE; // builds a n x n grid of squares

  const [visitedNodesSoFar, setVisitedNodesSoFar] = useState({}); // all the nodes visited in order by the dijkstra's algorithm
  const [numOfVisitedNodesSoFar, setNumOfVisitedNodesSoFar] = useState(0); // tracks how much of the visitedNodesSoFar list is traversed after each iteration 
  
  const [shortestPathNodesSoFar, setShortestPathNodesSoFar] = useState({}); // all the nodes of the shortest path in reverse order by the dijkstra's alagorithm
  const [numOfShortestPathNodesSoFar, setNumOfShortestPathNodesSoFar] = useState(0); // tracks how much of the shortestPathNodesSoFar list is traversed after each iteration 

  const [blockedNodes, setBlockedNodes] = useState({});
  const [startNode, setStartNode] = useState(0);
  const [endNode, setEndNode] = useState(NUM_OF_TOTAL_NODES);
  const [editWalls,setEditWalls] = useState(false);

  // GRID GRAPH
  const GRID_GRAPH = new GridGraph(NUM_OF_NODES_PER_SIDE); // internally forms a graph with nodes representing a grid (weight between every node is 1)
  const PATH = new DijkstrasAlgorithm(GRID_GRAPH, 6, 50); // compute dijkstra's algorithm
  const SHORTEST_PATH = [...PATH.getShortestPath()]; // copy return array of shortest path
  const VISITED_NODES = [...PATH.getVisitedNodesInOrder()]; // copy return array of all visited nodes in order

  return (
    <div className = "app_container">
      <Grid 

        VISITED_NODES = {VISITED_NODES}

        NUM_OF_TOTAL_NODES = {NUM_OF_TOTAL_NODES}
        VISITED_NODES = {VISITED_NODES}

        numOfVisitedNodesSoFar = {numOfVisitedNodesSoFar}
        visitedNodesSoFar = {visitedNodesSoFar}

        SHORTEST_PATH = {SHORTEST_PATH}

        numOfShortestPathNodesSoFar = {numOfShortestPathNodesSoFar}
        shortestPathNodesSoFar = {shortestPathNodesSoFar}

        blockedNodes = {blockedNodes}
        setBlockedNodes = {setBlockedNodes} 

        editWalls = {editWalls}
        setEditWalls = {setEditWalls}
      />
      <Menu
        VISITED_NODES = {VISITED_NODES}

        numOfVisitedNodesSoFar = {numOfVisitedNodesSoFar}
        setNumOfVisitedNodesSoFar = {setNumOfVisitedNodesSoFar}
        visitedNodesSoFar = {visitedNodesSoFar}
        setVisitedNodesSoFar = {setVisitedNodesSoFar}

        SHORTEST_PATH = {SHORTEST_PATH}

        numOfShortestPathNodesSoFar = {numOfShortestPathNodesSoFar}
        setNumOfShortestPathNodesSoFar = {setNumOfShortestPathNodesSoFar}
        shortestPathNodesSoFar = {shortestPathNodesSoFar}
        setShortestPathNodesSoFar = {setShortestPathNodesSoFar}

      />
    </div>
  );
}

export default App;