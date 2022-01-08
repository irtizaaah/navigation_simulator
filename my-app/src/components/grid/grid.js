import "./grid.css";
import Square from "../square/square";

function Grid(props) {
    const grid = [];

    for(let square = 0; square < props.numOfTotalNodes; square++){
        if(props.visitedNodesSoFar.includes(square)){
            grid.push(<Square name = {square} visited = {true}/>);
        }
        else{
            grid.push(<Square name = {square} visited = {false}/>);
        }
    }

    return(
        <div className = "grid_container">
            {grid}
        </div>
    );
}

export default Grid;

