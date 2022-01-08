import "./square.css";

function Square(props) {

    let square;

    if(props.visited === true){
        square = <div className = "square_container-node visited">{props.name}</div>
    }
    else{
        square = <div className = "square_container-node unvisited">{props.name}</div>
    }

    return(
        <div className = "square_container">
            {square}
        </div>
    );
}


export default Square;
    