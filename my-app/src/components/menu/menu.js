import "./menu.css";
import Travel from "./travel/travel";
import Route from "./route/route";
import Build from "./build/build";

function Menu(props){
  return (
    <div className = "menu_container">
        <Travel
          name = "Travel"
          VISITED_NODES = {props.VISITED_NODES}
          numOfVisitedNodesSoFar = {props.numOfVisitedNodesSoFar}
          setNumOfVisitedNodesSoFar = {props.setNumOfVisitedNodesSoFar}
          visitedNodesSoFar = {props.visitedNodesSoFar}
          setVisitedNodesSoFar = {props.setVisitedNodesSoFar}

          // SHORTEST PATH
          SHORTEST_PATH_NODES = {props.SHORTEST_PATH_NODES}
          numOfShortestPathNodesSoFar = {props.numOfShortestPathNodesSoFar}
          setNumOfShortestPathNodesSoFar = {props.setNumOfShortestPathNodesSoFar}
          shortestPathNodesSoFar = {props.shortestPathNodesSoFar}
          setShortestPathNodesSoFar = {props.setShortestPathNodesSoFar}

          // VISUALIZE GRID
          visualizeVisitedNodes = {props.visualizeVisitedNodes}
          setVisualizeVisitedNodes = {props.setVisualizeVisitedNodes}
          visualizeShortestPath = {props.visualizeShortestPath}
          setVisualizeShortestPath = {props.setVisualizeShortestPath}
        />

        <Route
          name = "Route"
          // START AND END
          editStartNode = {props.editStartNode}
          setEditStartNode = {props.setEditStartNode}

          editEndNode = {props.editEndNode}
          setEditEndNode = {props.setEditEndNode}

          // RESET AND BLOCKED NODES
          editResetedNodes = {props.editResetedNodes}
          setEditResetedNodes = {props.setEditResetedNodes}
          editBlockedNodes = {props.editBlockedNodes}
          setEditBlockedNodes = {props.setEditBlockedNodes}
        />
        
        <Build
          name = "Build"
          // BLOCKED NODES
          editBlockedNodes = {props.editBlockedNodes}
          setEditBlockedNodes = {props.setEditBlockedNodes}

          // WEIGHTED NODES
          editWeightedNodes = {props.editWeightedNodes}
          setEditWeightedNodes = {props.setEditWeightedNodes}

          // REMOVE NODES
          editResetedNodes = {props.editResetedNodes}
          setEditResetedNodes = {props.setEditResetedNodes}
        />
    </div>
  );
}

export default Menu;