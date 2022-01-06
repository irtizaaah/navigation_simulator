import "./node.css";

function Node(props) {
    return(
        <div className = "node-container">
            <div className = "node">{props.name}</div>
        </div>
    );
}


export default Node;
    