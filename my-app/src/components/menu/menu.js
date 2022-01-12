import "./menu.css";
import Drive from "./drive/drive";
import Route from "./route/route";
import Build from "./build/build";

function Menu(props){
  return (
    <div className = "menu_container">
        <Drive
            name = "Drive"
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

        <Route
            name = "Route"
            editStartNode = {props.editStartNode}
            setEditStartNode = {props.setEditStartNode}
            editEndNode = {props.editEndNode}
            setEditEndNode = {props.setEditEndNode}
            editBlockedNodes = {props.editBlockedNodes}
            setEditBlockedNodes = {props.setEditBlockedNodes}

        />
        
        <Build
            name = "Build"
            editBlockedNodes = {props.editBlockedNodes}
            setEditBlockedNodes = {props.setEditBlockedNodes}
            editWeightedNodes = {props.editWeightedNodes}
            setEditWeightedNodes = {props.setEditWeightedNodes}
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