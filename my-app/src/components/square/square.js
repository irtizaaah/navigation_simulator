import "./square.css";
import {useState} from "react"

function Square(props) {

    // HANDLE MOUSE EVENTS
    function handleMouseOver(){
        if(props.editBlockedNodes === true && props.click === true){
            props.setBlockedNodes(() => {
                console.log("cliked on block node");
                let newBlockedNodes = {...props.blockedNodes};
                newBlockedNodes[props.squareIndex] = true;
                return newBlockedNodes;
            });
            props.setGridGraph(()=>{
                console.log("grid weight changed");
                props.gridGraph.changeWeight(props.squareIndex, 0);
                return props.gridGraph;
            })
        }
    }

    function handleMouseClick(){
        props.setClick(props.click ? false : true);
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
                console.log("cliked on block node");
                let newBlockedNodes = {...props.blockedNodes}; 
                newBlockedNodes[props.squareIndex] = true;
                return newBlockedNodes;
            });
            props.setGridGraph(()=>{
                console.log("grid weight changed");
                props.gridGraph.changeWeight(props.squareIndex, 0);
                return props.gridGraph;
            })
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
                onMouseOver = {() => {handleMouseOver();}}
            >
             </div>
        </div>
    );
}

// onMouseOver = {() => {handleMouseOver();}}


export default Square;
 