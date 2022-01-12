import "./drive.css";
import Button from "../button/button";
import useInterval from "./use-interval";
import React, {useEffect} from 'react';

function SubMenu(props){

    const TIME_PER_ITERATION = 100;
    useInterval(animateVisitedNodes, props.visualizeVisitedNodes ? TIME_PER_ITERATION:null);
    useInterval(animateShortestPathNodes, props.visualizeShortestPath ? TIME_PER_ITERATION:null);


    useEffect(()=>{
        if(props.numOfVisitedNodesSoFar === props.VISITED_NODES.length){
            props.setVisualizeVisitedNodes(false);
            props.setVisualizeShortestPath(true);
        }
    },[props.visualizeVisitedNodes, props.visitedNodesSoFar, props.VISITED_NODES])

    useEffect(()=>{
        if(props.numOfShortestPathNodesSoFar === props.SHORTEST_PATH.length){
            props.setVisualizeShortestPath(false);
        }
    },[props.visualizeShortestPath, props.shortestPathNodesSoFar, props.SHORTEST_PATH])

    function animateVisitedNodes(){
        props.setNumOfVisitedNodesSoFar(props.numOfVisitedNodesSoFar + 1);
        props.setVisitedNodesSoFar(() => {
            for(let i = 0; i < props.numOfVisitedNodesSoFar; i++){
                props.visitedNodesSoFar[props.VISITED_NODES[i]] = true;
            }
            console.log("visited: " + props.numOfVisitedNodesSoFar);
            return props.visitedNodesSoFar;
        });
    };

    function animateShortestPathNodes(){
        props.setNumOfShortestPathNodesSoFar(props.numOfShortestPathNodesSoFar + 1);
        props.setShortestPathNodesSoFar(() => {
            for(let i = 0; i < props.numOfShortestPathNodesSoFar; i++){
                props.shortestPathNodesSoFar[props.SHORTEST_PATH[i]] = true;
            }
            console.log("shortest path: " + props.numOfVisitedNodesSoFar);
            return props.shortestPathNodesSoFar;
        });
    };

  return (
    <div className = "sub_menu_container">
        <h1>{props.name}</h1>
        <Button 
            name = "Drive"
            handleClick = {() => {props.setVisualizeVisitedNodes(true)}}
        />
    </div>
  );
}

export default SubMenu;