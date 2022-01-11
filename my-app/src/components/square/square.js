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
        props.setEditWalls(() => {return props.editWalls === true ? false : true});

        props.setBlockedNodes(() => {
            props.blockedNodes[props.squareIndex] = true;
            return props.blockedNodes;
        });
    }

    return(
        <div className = "square_container-outlined">
            <div 
                className = {`
                square_container-node 
                    ${props.NodeClassName}
                    `}
                onMouseOver = {() => {handleMouseOver();}}
                onClick = {() => {handleMouseClick()}}
            >
            {props.squareIndex}
             </div>
        </div>
    );
}


export default Square;
 