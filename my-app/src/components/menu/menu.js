import "./menu.css";
import SubMenu from "./sub-menu/sub-menu";

function Menu(props){
  return (
    <div className = "menu_container">
        <SubMenu
            name = "Maps"
            VISITED_NODES = {props.VISITED_NODES}
            numOfVisitedNodes = {props.numOfVisitedNodes}
            setNumOfVisitedNodes = {props.setNumOfVisitedNodes}
            visitedNodesSoFar = {props.visitedNodesSoFar}
            setVisitedNodesSoFar = {props.setVisitedNodesSoFar}
            visualize = {props.visualize}
            setVisualize = {props.setVisualize}
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