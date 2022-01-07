import "./grid.css";
import Node from "../node/node";

function Grid(props) {
    const grid = [];

    for(let node = 0; node < props.numOfTotalNodes; node++){
        if(props.visitedNodesSoFar.includes(node)){
            grid.push(<Node name = {node} visited = {true}/>);
        }
        else{
            grid.push(<Node name = {node} visited = {false}/>);
        }
    }

    return(
        <div className = "grid_container">
            {grid}
        </div>
    );
}

export default Grid;

