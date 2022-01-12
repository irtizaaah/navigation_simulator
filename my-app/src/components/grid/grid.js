import "./grid.css";
import Square from "../square/square";
import {useState} from "react"

function Grid(props) {
    let grid = [];
    let NodeClassName = "";

    for(let squareIndex = 0; squareIndex < props.NUM_OF_TOTAL_NODES; squareIndex++){
        if(squareIndex in props.blockedNodes){
            NodeClassName = "node-blocked";
        }
        else if(squareIndex === props.startNode){
            NodeClassName = "node-start";
        }
        else if(squareIndex === props.endNode){
            NodeClassName = "node-end";
        }
        else if(squareIndex in props.visitedNodesSoFar){
            if(squareIndex in props.shortestPathNodesSoFar && props.numOfVisitedNodesSoFar === props.VISITED_NODES.length){
                // checks if nodes exist in shortest path nodes list after all the visited nodes have been iterated over
                NodeClassName = "node-shortest_path";
            }
            else{
                NodeClassName = "node-visited";
            }
        }
        else if(squareIndex in props.weightedNodes){
            NodeClassName = "node-weighted";
        }
        else{
            NodeClassName = "";
        }

        grid.push(<Square
            NUM_OF_NODES_PER_SIDE = {props.NUM_OF_NODES_PER_SIDE}
            key = {squareIndex} 
            squareIndex = {squareIndex}
            NodeClassName = {NodeClassName}

            editBlockedNodes = {props.editBlockedNodes}
            setEditBlockedNodes = {props.setEditBlockedNodes}

            blockedNodes = {props.blockedNodes}
            setBlockedNodes = {props.setBlockedNodes}

            editStartNode = {props.editStartNode}
            setEditStartNode = {props.setEditStartNode}
            editEndNode = {props.editEndNode}
            setEditEndNode = {props.setEditEndNode}

            startNode = {props.startNode}
            setStartNode = {props.setStartNode}
            endNode = {props.endNode}
            setEndNode = {props.setEndNode}

            gridGraph = {props.gridGraph}
            setGridGraph = {props.setGridGraph}

            setRemoveNodes = {props.setRemoveNodes}
            removeNodes = {props.removeNodes}
            
            editContinuousBlockedNodes = {props.editContinuousBlockedNodes}
            setEditContinuousBlockedNodes = {props.setEditContinuousBlockedNodes}

            weightedNodes = {props.weightedNodes}
            setWeightedNodes = {props.setWeightedNodes}
            editWeightedNodes = {props.editWeightedNodes}
            setEditWeightedNodes = {props.setEditWeightedNodes}


            removedNodes = {props.removedNodes}
            setRemovedNodes = {props.setRemovedNodes}

            removeContinuousNodes = {props.removeContinuousNodes}
            setRemoveContinuousNodes = {props.setRemoveContinuousNodes}
        />);
    }

    return(
        <div className = "grid_container">
            {grid}
        </div>
    );
}

export default Grid;

