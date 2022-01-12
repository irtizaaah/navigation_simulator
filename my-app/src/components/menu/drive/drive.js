import "./drive.css";
import Button from "../button/button";
import useInterval from "./use-interval";
import React, {useState, useEffect} from 'react';

function SubMenu(props){

    const [visualizeVisitedNodes, setVisualizeVisitedNodes] = useState(false);
    const [visualizeShortestPath, setVisualizeShortestPath] = useState(false);

    const TIME_PER_ITERATION = 100;
    useInterval(animateVisitedNodes, visualizeVisitedNodes ? TIME_PER_ITERATION:null);
    useInterval(animateShortestPathNodes, visualizeShortestPath ? TIME_PER_ITERATION:null);


    useEffect(()=>{
        if(props.numOfVisitedNodesSoFar === props.VISITED_NODES.length){
            setVisualizeVisitedNodes(false);
            setVisualizeShortestPath(true);
        }
    },[visualizeVisitedNodes, props.visitedNodesSoFar, props.VISITED_NODES])

    useEffect(()=>{
        if(props.numOfShortestPathNodesSoFar === props.SHORTEST_PATH.length){
            setVisualizeShortestPath(false);
        }
    },[visualizeShortestPath, props.shortestPathNodesSoFar, props.SHORTEST_PATH])

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
            handleClick = {() => {setVisualizeVisitedNodes(true)}}
        />
    </div>
  );
}

export default SubMenu;