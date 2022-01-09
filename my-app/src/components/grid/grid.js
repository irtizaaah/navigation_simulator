import "./grid.css";
import Square from "../square/square";

function Grid(props) {
    const grid = [];
    let nodeVisited = "false";
    let nodeWall = "";

    for(let squareIndex = 0; squareIndex < props.numOfTotalNodes; squareIndex++){
        if(squareIndex in props.visitedNodesSoFar){
            nodeVisited = "node-visited";
        }
        else{
            nodeVisited = "";
        }

        if(squareIndex in props.wallNodes){
            nodeWall = "node-wall";
        }
        else{
            nodeWall = "";
        }

        grid.push(<Square 
            squareIndex = {squareIndex} 
            nodeVisited = {nodeVisited} 
            nodeWall = {nodeWall} 
            editWalls = {props.editWalls}
            setEditWalls = {props.setEditWalls}
            wallNodes = {props.wallNodes}
            setWallNodes = {props.setWallNodes}
        />);
    }

    return(
        <div 
            className = "grid_container"
        >
            {grid}
        </div>
    );
}

export default Grid;

