import "./button.css";

function Button(props) {
  return (
    <div className = "button_container">
      <button className = "button_container-button" onClick = {() => {props.handleClick()}}>
        {props.name}
      </button>
    </div>
  );
}

export default Button;