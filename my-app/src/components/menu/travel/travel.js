import "./travel.css";
import Button from "../button/button";
import useInterval from "./use-interval";
import React, {useEffect} from 'react';

function Travel(props){

    const TIME_PER_ITERATION = 100;
    useInterval(animateVisitedNodes, props.visualizeVisitedNodes ? TIME_PER_ITERATION:null);
    useInterval(animateShortestPathNodes, props.visualizeShortestPath ? TIME_PER_ITERATION:null);
    /*
        update grid at every interval with updated shortest path and visited nodes
        list when visualizeVisitedNodes/visualizeShortestPath is set to true
    */

    useEffect(()=>{ // turn off visualizeVisitedNodes when all visited nodes have been traversed
        if(props.numOfVisitedNodesSoFar === props.VISITED_NODES.length){
            props.setVisualizeVisitedNodes(false);
            props.setVisualizeShortestPath(true);
        }
    },[props.visualizeVisitedNodes, props.visitedNodesSoFar, props.VISITED_NODES])

    useEffect(()=>{ // turn off visualizeShortestPathNodes when all shortest path nodes have been traversed
        if(props.numOfShortestPathNodesSoFar === props.SHORTEST_PATH_NODES.length){
            props.setVisualizeShortestPath(false);
        }
    },[props.visualizeShortestPath, props.shortestPathNodesSoFar, props.SHORTEST_PATH_NODES])

    function animateVisitedNodes(){ // update visitedNodesSoFar with next node from VISITED_NODES every iteration
        props.setNumOfVisitedNodesSoFar(props.numOfVisitedNodesSoFar + 1);
        props.setVisitedNodesSoFar(() => {
            for(let i = 0; i < props.numOfVisitedNodesSoFar; i++){
                props.visitedNodesSoFar[props.VISITED_NODES[i]] = true;
            }
            return props.visitedNodesSoFar;
        });
    };

    function animateShortestPathNodes(){ // update shortestPathNodesSoFar with next node from SHORTEST_PATH_NODES (nodes) every iteration
        props.setNumOfShortestPathNodesSoFar(props.numOfShortestPathNodesSoFar + 1);
        props.setShortestPathNodesSoFar(() => {
            for(let i = 0; i < props.numOfShortestPathNodesSoFar; i++){
                props.shortestPathNodesSoFar[props.SHORTEST_PATH_NODES[i]] = true;
            }
            return props.shortestPathNodesSoFar;
        });
    };

  return (
    <div className = "travel_container">
        <h1>{props.name}</h1>
        <Button 
            name = "Shortest Path"
            handleClick = {() => {props.setVisualizeVisitedNodes(true)}}
        />
    </div>
  );
}

export default Travel;