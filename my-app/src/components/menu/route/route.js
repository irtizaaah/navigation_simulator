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
              props.setEditStartNode(true); // button
              props.setEditBlockedNodes(false); // in case state wasn't set to false already (these are toggles)
              props.setEditResetedNodes(false); // in case state wasn't set to false already (these are toggles)
            }
          }
        />
        <Button 
            name = "End"
            handleClick = {() => {
              props.setEditEndNode(true); // button
              props.setEditBlockedNodes(false); // in case state wasn't set to false already (these are toggles)
              props.setEditResetedNodes(false); // in case state wasn't set to false already (these are toggles)
            }
          }
        />
      </div>
    );
  }

export default Route;