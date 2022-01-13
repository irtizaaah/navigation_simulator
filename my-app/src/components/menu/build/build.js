import "./build.css"
import Button from '../button/button';
/*
  Toggles need to be checked they're set to false because unlike buttons they aren't designed to 
  automatically return to false after they're clicked
*/
function Build(props){
    return (
      <div className = "build_container">
        <Button 
            name = "Block"
            handleClick = {() => {
              props.setEditBlockedNodes(props.editBlockedNodes ? false : true); // toggle
              props.setEditResetedNodes(false); // in case state wasn't set to false already
            }}
        />
        <Button 
            name = "Remove"
            handleClick = {() => {
              props.setEditResetedNodes(props.editResetedNodes ? false : true); // toggle
              props.setEditBlockedNodes(false); // in case state wasn't set to false already
            }}
        />
        <Button 
            name = "Weight"
            handleClick = {() => {
              props.setEditWeightedNodes(true); // button
              props.setEditBlockedNodes(false); // in case state wasn't set to false already
              props.setEditResetedNodes(false); // in case state wasn't set to false already
            }
          }
        />
      </div>
    );
  }

export default Build;