import GridGraph from "../../algorithm/grid-graph";
import "./square.css";

function Square(props) {
    // HANDLE MOUSE EVENTS
    function handleMouseOver(){
        if(props.editWalls === true){
            props.setBlockedNodes(() => {
                props.blockedNodes[props.squareIndex] = true;
                return props.blockedNodes;
            });
        }
    }

    function handleMouseClick(){
        if(props.editStartNode === true){
            props.setStartNode(props.squareIndex);
            console.log("cliked on start node")
            props.setEditStartNode(false);
        }
        else if(props.editEndNode === true){
            props.setEndNode(props.squareIndex);
            console.log("cliked on end node")
            props.setEditEndNode(false);
        }
        else if(props.editBlockedNodes === true){
            props.setBlockedNodes(() => {
                props.blockedNodes[props.squareIndex] = true;
                props.setGridGraph(()=>{
                    props.gridGraph.changeWeight(props.squareIndex, 0);
                    return props.gridGraph;
                })
                return props.blockedNodes;
            });
            console.log("cliked on block node");
        }
    }

    return(
        <div className = "square_container-outlined">
            <div 
                className = {`
                square_container-node 
                    ${props.NodeClassName}
                    `}
                onClick = {() => {handleMouseClick()}}
            >
            {props.squareIndex}
             </div>
        </div>
    );
}

// onMouseOver = {() => {handleMouseOver();}}


export default Square;
 