import "./route.css"
import Button from '../button/button';
/*
  Toggles need to be checked they're set to false because unlike buttons they aren't designed to 
  automatically return to false after they're clicked
*/
function Route(props){
    return (
      <div className = "route_container">
        <Button 
            name = "Start"
            handleClick = {() => {
              props.setEditStartNode(props.editStartNode ? false : true); 
              props.setEditEndNode(false); // in case state wasn't set to false already
              props.setEditBlockedNodes(false); // in case state wasn't set to false already
              props.setEditResetedNodes(false); // in case state wasn't set to false already
              props.setEditWeightedNodes(false); // in case state wasn't set to false already

            }
          }

          buttonClassName = {props.editStartNode ? "button_container-button-on" : ""}
        />
        <Button 
            name = "End"
            handleClick = {() => {
              props.setEditEndNode(props.editEndNode ? false : true);
              props.setEditStartNode(false); // in case state wasn't set to false already
              props.setEditBlockedNodes(false); // in case state wasn't set to false already
              props.setEditResetedNodes(false); // in case state wasn't set to false already
              props.setEditWeightedNodes(false); // in case state wasn't set to false already
            }
          }

          buttonClassName = {props.editEndNode ? "button_container-button-on" : ""}
        />
      </div>
    );
  }

export default Route;