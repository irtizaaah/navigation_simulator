import "./sub-menu.css";
import Button from "../button/button";
import {useEffect} from "react";

function SubMenu(props){

    function handleClick(){
        let a = setInterval(() => {props.setNumOfVisitedNodes(props.numOfVisitedNodes + 1); console.log(props.numOfVisitedNodes)}, 1000);
        setTimeout(() => {clearInterval(a)}, 10000);
    }

  return (
    <div className = "sub_menu_container">
        <h1>{props.name}</h1>
        <Button 
            name = "Navigate"
            handleClick = {handleClick}
            visualize = {props.visualize}
            setVisualize = {props.setVisualize}
        />
    </div>
  );
}

export default SubMenu;

/*
            props.setNumOfVisitedNodes(props.numOfVisitedNodes + 1);
            props.setVisitedNodesSoFar(() => {
                for(let i = 0; i < props.numOfVisitedNodes; i++){
                  props.visitedNodesSoFar[props.VISITED_NODES[i]] = true;
                  }
                  return props.visitedNodesSoFar;
              });
            };
*/