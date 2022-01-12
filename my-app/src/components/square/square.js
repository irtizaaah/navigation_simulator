import "./square.css";

function Square(props) {

    // HANDLE MOUSE EVENTS
    function handleMouseOver(){
        if(props.editBlockedNodes === true && props.editContinuousBlockedNodes === true){
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
        else if(props.editWeightedNodes === true){
            props.setWeightedNodes(() => {
                console.log("cliked on weighted node");
                let newWeightedNodes = {...props.weightedNodes}; 
                newWeightedNodes[props.squareIndex] = true;
                return newWeightedNodes;
            });
            props.setGridGraph(()=>{
                console.log("grid weight changed to 1000");
                props.gridGraph.changeWeight(props.squareIndex, 3);
                return props.gridGraph;
            })
            props.setEditWeightedNodes(false);
        }
        else if(props.editBlockedNodes === true){
            props.setEditContinuousBlockedNodes(props.editContinuousBlockedNodes ? false : true);
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
 