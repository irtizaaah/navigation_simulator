import "./node.css";

function Node(props) {

    let node;

    if(props.visited === true){
        node = <div className = "node_container-node visited">{props.name}</div>
    }
    else{
        node = <div className = "node_container-node unvisited">{props.name}</div>
    }

    return(
        <div className = "node_container">
            {node}
        </div>
    );
}


export default Node;
    