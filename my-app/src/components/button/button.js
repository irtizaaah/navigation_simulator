import "./button.css";
import React from 'react'

function Button(props) {

  const buttonRef = React.useRef(null)

  setTimeout(function() {
    buttonRef.current.click();
  }, 1000);
  
  return (
    <div className = "button_container">
      <button ref={buttonRef}
        className = "button_container-button" 
        onClick = {() => {
          props.setNumOfVisitedNodes(props.numOfVisitedNodes + 1)
          props.setVisitedNodesSoFar(() => {
              for(let i = 0; i < props.numOfVisitedNodes; i++ ){
                props.visitedNodesSoFar[i] = props.visitedNodesInOrder[i];
              }
              return [...props.visitedNodesSoFar];
          });
          }}>
        {props.name}
      </button>
    </div>
  );
}

export default Button;