import "./square.css";

function Square(props) {

    function handleMouseOver(){
        if(props.editWalls === true){
            console.log(props.squareIndex)
            props.setWallNodes(() => {
                props.wallNodes[props.squareIndex] = true;
                return props.wallNodes;
            });
        }
    }

    function handleMouseClick(){
        props.setEditWalls(() => { 
            if(props.editWalls === true){
                return false;
            }
            else if(props.editWalls === false){
                return true;
            }
        });

        props.setWallNodes(() => {
            props.wallNodes[props.squareIndex] = true;
            return props.wallNodes;
        });
    }

    return(
        <div className = "square_container">
            <div 
                className = {
                    `square_container-node 
                    ${props.nodeVisited} 
                    ${props.nodeWall}`
                    }
                onMouseOver = {() => {handleMouseOver();}}
                onClick = {() => {handleMouseClick();}}
            >
            {props.squareIndex}
             </div>
        </div>
    );
}


export default Square;
 