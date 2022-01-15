import "./maps.css";
import { NONE, FRANCE, USA, CHINA, INDIA, FILLED } from "./map-data";
import Button from '../button/button';
import GridGraph from "../../../algorithm/grid-graph";
import {useState} from "react";
/*
  Toggles need to be checked they're set to false because unlike buttons they aren't designed to 
  automatically return to false after they're clicked
*/
function Maps(props){

    const [map, setMap] = useState("None");

    const handleClick = (map) => {
      props.setStartNode(map.startNode);
      props.setEndNode(map.endNode);
      props.setBlockedNodes({...map.blockedNodes});
      props.setWeightedNodes({...map.weightedNodes});

      props.setGridGraph(()=>{
        let newGridGraph = new GridGraph(props.NUM_OF_NODES_PER_SIDE);
        for(let nodeIndex = 0; nodeIndex < props.NUM_OF_TOTAL_NODES; nodeIndex++){
          if(nodeIndex in map.blockedNodes){
            newGridGraph.changeWeight(nodeIndex, props.NO_WEIGHT);
          }
          if(nodeIndex in map.weightedNodes){
            newGridGraph.changeWeight(nodeIndex, props.ADDED_WEIGHT)
          }
        }
        return newGridGraph;
      })

      setMap(map.name);
      props.setEditEndNode(false);
      props.setEditBlockedNodes(false);
      props.setEditResetedNodes(false); 
      props.setEditWeightedNodes(false); 
      props.setEditContinuousBlockedNodes(false);
      props.setEditContinuousResetedNodes(false);
      // in case state wasn't set to false already
    }

    
    
    return (
      <div className = "maps_container">
        <Button
            name = {NONE.name}
            handleClick = {handleClick}
            handleClickArgument = {NONE}
            buttonClassName = {map === "None" ? "button_container-button-on" : ""}
        />
        <Button 
            name = {FRANCE.name}
            handleClick = {handleClick}
            handleClickArgument = {FRANCE}
            buttonClassName = {map === "France" ? "button_container-button-on" : ""}
        />
        <Button 
            name = {USA.name}
            handleClick = {handleClick}
            handleClickArgument = {USA}
            buttonClassName = {map === "USA" ? "button_container-button-on" : ""}
        />
        <Button 
            name = {CHINA.name}
            handleClick = {handleClick}
            handleClickArgument = {CHINA}
            buttonClassName = {map === "China" ? "button_container-button-on" : ""}
        />
        <Button 
            name = {INDIA.name}
            handleClick = {handleClick}
            handleClickArgument = {INDIA}
            buttonClassName = {map === "India" ? "button_container-button-on" : ""}
        />
        <Button
            name = {FILLED.name}
            handleClick = {handleClick}
            handleClickArgument = {FILLED}
            buttonClassName = {map === "Filled" ? "button_container-button-on" : ""}
        />
      </div>
    );
  }

export default Maps;