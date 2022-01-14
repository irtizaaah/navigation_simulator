import "./menu.css";
import Travel from "./travel/travel";
import Route from "./route/route";
import Build from "./build/build";

function Menu(props){
  return (
    <div className = "menu_container">
        <h1>Route</h1>
        <Route
          // START AND END
          editStartNode = {props.editStartNode}
          setEditStartNode = {props.setEditStartNode}

          editEndNode = {props.editEndNode}
          setEditEndNode = {props.setEditEndNode}

          // WEIGHTED NODES
          editWeightedNodes = {props.editWeightedNodes}
          setEditWeightedNodes = {props.setEditWeightedNodes}

          // RESET AND BLOCKED NODES
          editResetedNodes = {props.editResetedNodes}
          setEditResetedNodes = {props.setEditResetedNodes}
          editBlockedNodes = {props.editBlockedNodes}
          setEditBlockedNodes = {props.setEditBlockedNodes}
        />
        <h1>Build</h1>
        <Build
          // BLOCKED NODES
          editBlockedNodes = {props.editBlockedNodes}
          setEditBlockedNodes = {props.setEditBlockedNodes}

          // WEIGHTED NODES
          editWeightedNodes = {props.editWeightedNodes}
          setEditWeightedNodes = {props.setEditWeightedNodes}

          // REMOVE NODES
          editResetedNodes = {props.editResetedNodes}
          setEditResetedNodes = {props.setEditResetedNodes}

          //START AND END NODES
          setEditStartNode = {props.setEditStartNode}
          setEditEndNode = {props.setEditEndNode}
        />
        <h1>Travel</h1>
        <Travel
          visitedNodes = {props.visitedNodes}
          numOfVisitedNodesSoFar = {props.numOfVisitedNodesSoFar}
          setNumOfVisitedNodesSoFar = {props.setNumOfVisitedNodesSoFar}
          visitedNodesSoFar = {props.visitedNodesSoFar}
          setVisitedNodesSoFar = {props.setVisitedNodesSoFar}

          // SHORTEST PATH
          shortestPathNodes = {props.shortestPathNodes}
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
    </div>
  );
}

export default Menu;