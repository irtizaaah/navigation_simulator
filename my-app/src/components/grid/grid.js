import "./grid.css";
import Square from "../square/square";

function Grid(props) {
    let grid = [];
    let visitedNodeClassName = "";
    let blockedNodeClassName = "";

    for(let squareIndex = 0; squareIndex < props.NUM_OF_TOTAL_NODES; squareIndex++){
        visitedNodeClassName = squareIndex in props.visitedNodesSoFar ? "node-visited" : "";
        blockedNodeClassName = squareIndex in props.blockedNodes ? "node-blocked" : "";

        grid.push(<Square
            key = {squareIndex} 
            squareIndex = {squareIndex}
            visitedNodeClassName = {visitedNodeClassName} 
            blockedNodeClassName = {blockedNodeClassName} 
            editWalls = {props.editWalls}
            setEditWalls = {props.setEditWalls}
            blockedNodes = {props.blockedNodes}
            setBlockedNodes = {props.setBlockedNodes}
        />);
    }

    return(
        <div className = "grid_container">
            {grid}
        </div>
    );
}

export default Grid;

