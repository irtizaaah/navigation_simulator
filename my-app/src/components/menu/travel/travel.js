import "./travel.css";
import Button from "../button/button";
import useInterval from "./use-interval";
import React, {useState, useEffect} from 'react';

function Travel(props){

    const TIME_PER_ITERATION = 150;
    useInterval(animateVisitedNodes, props.visualizeVisitedNodes ? TIME_PER_ITERATION:null);
    useInterval(animateShortestPathNodes, props.visualizeShortestPath ? TIME_PER_ITERATION:null);
    /*
        update grid at every interval with updated shortest path and visited nodes
        list when visualizeVisitedNodes/visualizeShortestPath is set to true
    */

    useEffect(()=>{ // turn off visualizeVisitedNodes when all visited nodes have been traversed
        if(props.numOfVisitedNodesSoFar === props.visitedNodes.length){
            console.log("visited complete");
            props.setVisualizeVisitedNodes(false);
            props.setVisualizeShortestPath(true);
        }
    },[props.numOfVisitedNodesSoFar, props.visualizeVisitedNodes, props.visitedNodesSoFar, props.visitedNodes])

    useEffect(()=>{ // turn off visualizeShortestPathNodes when all shortest path nodes have been traversed
        if(props.numOfShortestPathNodesSoFar === props.shortestPathNodes.length){
            console.log("shortest path checked")
            props.setVisualizeShortestPath(false);
        }
    },[props.numOfShortestPathNodesSoFar, props.visualizeShortestPath, props.shortestPathNodesSoFar, props.shortestPathNodes])

    function animateVisitedNodes(){ // update visitedNodesSoFar with next node from visitedNodes every iteration
        props.setNumOfVisitedNodesSoFar(props.numOfVisitedNodesSoFar + 1);
        props.setVisitedNodesSoFar(() => {
            for(let i = 0; i < props.numOfVisitedNodesSoFar; i++){
                props.visitedNodesSoFar[props.visitedNodes[i]] = true;
            }
            return props.visitedNodesSoFar;
        });
    };

    function animateShortestPathNodes(){ // update shortestPathNodesSoFar with next node from shortestPathNodes (nodes) every iteration
        props.setNumOfShortestPathNodesSoFar(props.numOfShortestPathNodesSoFar + 1);
        props.setShortestPathNodesSoFar(() => {
            for(let i = 0; i < props.numOfShortestPathNodesSoFar; i++){
                props.shortestPathNodesSoFar[props.shortestPathNodes[i]] = true;
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