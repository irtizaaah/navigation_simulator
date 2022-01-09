import "./app.css";
import Grid from "../grid/grid";
import GridGraph from "../../algorithm/grid-graph";
import DijkstrasAlgorithm from "../../algorithm/dijkstra-algorithm";
import Button from "../button/button";
import {useState} from 'react'
import {useEffect} from 'react'
import React from "react";

function App() {

  const numOfNodesPerSide = 15; // warning! CSS grid (grid.css) builds the square grid using this value
  const numOfTotalNodes = numOfNodesPerSide * numOfNodesPerSide; // builds a square grid (sq. area = side * side)
  const graph = new GridGraph(numOfNodesPerSide); 
    /* 
    - this buids a graph using the nodes
    - every adjacent node has a edge connecting them
    - the default weight for every edge is 1
    - every node is numbered in order
  */

  const [numOfVisitedNodes, setNumOfVisitedNodes] = useState(0);
  const [visitedNodesSoFar, setVisitedNodesSoFar] = useState({});
  const [wallNodes, setWallNodes] = useState({});

  const path = new DijkstrasAlgorithm(graph, 0, 25);
  const directions = [...path.getShortestPath()]; // returns array of directions to shortest path
  const visitedNodesInOrder = [...path.getVisitedNodesInOrder()]; // copy return array into this array

  // const [numOfVisitedNodes, setNumOfVisitedNodes] = useState(0);
  // const [visitedNodesSoFar, setVisitedNodesSoFar] = useState({});
  // const [visitedNodesInOrder, setVisitedNodesInOrder] = useState([]);
  // const [directions, setDirections] = useState([]);
  // const [path, setPath] = useState(new DijkstrasAlgorithm(graph, 20, 1))
  // const [wallNodes, setWallNodes] = useState({});

  // setDirections([...path.getShortestPath()]); // returns array of directions to shortest path
  // setVisitedNodesInOrder([...path.getVisitedNodesInOrder()]); // copy return array into this array

  // useEffect(() => {
  //   setPath(new DijkstrasAlgorithm(graph, 20, 1));
  //   setDirections([...path.getShortestPath()]); // returns array of directions to shortest path
  //   setVisitedNodesInOrder([...path.getVisitedNodesInOrder()]); // copy return array into this array
  // }, [wallNodes, path, graph]);

  // for(let nodeIndex = 0; nodeIndex < numOfTotalNodes; nodeIndex++){
  //   for(nodeIndex in wallNodes){
  //     graph.changeWeight(nodeIndex, 0);
  //   }
  // }

  const updateGrid = () => {
    setNumOfVisitedNodes(numOfVisitedNodes + 1); 

    setVisitedNodesSoFar(() => {
      for(let i = 0; i < numOfVisitedNodes; i++){
          visitedNodesSoFar[visitedNodesInOrder[i]] = true;
        }
        return visitedNodesSoFar;
    });
  }

  function navigateHandleClick(){
      setInterval(updateGrid(), 1000);
    }


  return (
    <div className = "app_container">
      <Grid 
        numOfTotalNodes = {numOfTotalNodes}
        numOfVisitedNodes = {numOfVisitedNodes}
        visitedNodesInOrder = {visitedNodesInOrder}
        visitedNodesSoFar = {visitedNodesSoFar}

        wallNodes = {wallNodes}
        setWallNodes = {setWallNodes} 
      />
      <Button 
        name = "Navigate"
        handleClick = {navigateHandleClick}
      />
    </div>
  );
}

export default App;