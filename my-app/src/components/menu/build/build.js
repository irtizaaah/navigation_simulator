import "./build.css"
import Button from '../button/button';
function Build(props){
    return (
      <div className = "build_container">
        <Button 
            name = "Block"
            handleClick = {() => {
              props.setEditBlockedNodes(props.editBlockedNodes ? false : true); 
              props.setEditStartNode(false); // in case state wasn't set to false already
              props.setEditEndNode(false); // in case state wasn't set to false already
              props.setEditResetedNodes(false); // in case state wasn't set to false already
              props.setEditWeightedNodes(false); // in case state wasn't set to false already
            }}

            buttonClassName = {props.editBlockedNodes ? "button_container-button-on" : ""}
        />
        <Button 
            name = "Reset"
            handleClick = {() => {
              props.setEditResetedNodes(props.editResetedNodes ? false : true);
              props.setEditStartNode(false); // in case state wasn't set to false already
              props.setEditEndNode(false); // in case state wasn't set to false already
              props.setEditBlockedNodes(false); // in case state wasn't set to false already
              props.setEditWeightedNodes(false); // in case state wasn't set to false already
            }}

            buttonClassName = {props.editResetedNodes ? "button_container-button-on" : ""}
        />
        <Button 
            name = "Weight"
            handleClick = {() => {
              props.setEditWeightedNodes(props.editWeightedNodes ? false : true); 
              props.setEditStartNode(false); // in case state wasn't set to false already
              props.setEditEndNode(false); // in case state wasn't set to false already
              props.setEditBlockedNodes(false); // in case state wasn't set to false already
              props.setEditResetedNodes(false); // in case state wasn't set to false already
            }
          }

          buttonClassName = {props.editWeightedNodes ? "button_container-button-on" : ""}
        />
      </div>
    );
  }

export default Build;