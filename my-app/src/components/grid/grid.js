import "./grid.css";
import Square from "../square/square";

function Grid(props) {
    let grid = [];
    let NodeClassName = "";

    for(let squareIndex = 0; squareIndex < props.NUM_OF_TOTAL_NODES; squareIndex++){
        if(squareIndex in props.blockedNodes){
            NodeClassName = "node-blocked";
        }
        if(squareIndex === props.startNode){
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
        else{
            NodeClassName = "";
        }

        grid.push(<Square
            key = {squareIndex} 
            squareIndex = {squareIndex}
            NodeClassName = {NodeClassName}
            editWalls = {props.editWalls}
            setEditWalls = {props.setEditWalls}
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
        />);
    }

    return(
        <div className = "grid_container">
            {grid}
        </div>
    );
}

export default Grid;

