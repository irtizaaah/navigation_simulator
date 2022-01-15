import "./maps.css";
import { FILLED_MAP } from "./map-data/filled-map";
import Button from '../button/button';
import GridGraph from "../../../algorithm/grid-graph";
/*
  Toggles need to be checked they're set to false because unlike buttons they aren't designed to 
  automatically return to false after they're clicked
*/
function Maps(props){
    return (
      <div className = "maps_container">
        <Button 
            name = "Filled Map"
            handleClick = {() => {
              props.setStartNode(FILLED_MAP.startNode);
              props.setEndNode(FILLED_MAP.endNode);
              props.setBlockedNodes({...FILLED_MAP.blockedNodes});
              props.setWeightedNodes({...FILLED_MAP.weightedNodes});

              props.setGridGraph(()=>{
                let newGridGraph = new GridGraph(props.NUM_OF_NODES_PER_SIDE);
                for(let nodeIndex = 0; nodeIndex < props.NUM_OF_TOTAL_NODES; nodeIndex++){
                  if(nodeIndex in FILLED_MAP.blockedNodes){
                    newGridGraph.changeWeight(nodeIndex, 0);
                  }
                }
                return newGridGraph;
              })

              props.setEditStartNode(false); // in case state wasn't set to false already
              props.setEditEndNode(false); // in case state wasn't set to false already
              props.setEditBlockedNodes(false); // in case state wasn't set to false already
              props.setEditResetedNodes(false); // in case state wasn't set to false already
              props.setEditWeightedNodes(false); // in case state wasn't set to false already
            }
          }
        />
      </div>
    );
  }

export default Maps;