import "./menu.css";
import SubMenu from "./sub-menu/sub-menu";

function Menu(props){
  return (
    <div className = "menu_container">
        <SubMenu
            name = "Maps"
            VISITED_NODES = {props.VISITED_NODES}
            numOfVisitedNodesSoFar = {props.numOfVisitedNodesSoFar}
            setNumOfVisitedNodesSoFar = {props.setNumOfVisitedNodesSoFar}
            visitedNodesSoFar = {props.visitedNodesSoFar}
            setVisitedNodesSoFar = {props.setVisitedNodesSoFar}


            SHORTEST_PATH = {props.SHORTEST_PATH}
            numOfShortestPathNodesSoFar = {props.numOfShortestPathNodesSoFar}
            setNumOfShortestPathNodesSoFar = {props.setNumOfShortestPathNodesSoFar}
            shortestPathNodesSoFar = {props.shortestPathNodesSoFar}
            setShortestPathNodesSoFar = {props.setShortestPathNodesSoFar}
        />
    </div>
  );
}

export default Menu;

/* 
<SubMenu
name = "Build"
/>
<SubMenu
name = "Route"
/>
<SubMenu
name = "Drive"
/> 
*/