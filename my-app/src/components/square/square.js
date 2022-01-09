import "./square.css";

function Square(props) {

    function handleMouseEnter(){
        if(props.editWalls === true){
            props.setWallNodes(() => {
                props.wallNodes[props.squareIndex] = true;
                return props.wallNodes;
            });
        }
    }

    return(
        <div className = "square_container">
            <div 
                className = {
                    `square_container-node 
                    ${props.nodeVisited} 
                    ${props.nodeWall}`
                    }

                onMouseEnter = {() => {
                        handleMouseEnter();
                    }
                }
                
                onClick = {() => {
                    props.setEditWalls(() => {   
                        if(props.editWalls === true){
                            return false;
                        }
                        else if(props.editWalls === false){
                            return true;
                        }

                        console.log(props.editWalls);
                    });

                    props.setWallNodes(() => {
                        props.wallNodes[props.squareIndex] = true;
                        return props.wallNodes;
                    });

                }}
            >
            {props.squareIndex}
             </div>
        </div>
    );
}


export default Square;
 