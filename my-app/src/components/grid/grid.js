import "./grid.css";
import Node from "../node/node";

function Grid(props) {
    const grid = [];

    for(let i = 0; i < props.numOfTotalNodes; i++){
        grid.push(<Node name = {i} />);
    }


    return(
        <div className = "grid-container">
            {grid}
        </div>
    );
}

export default Grid;

