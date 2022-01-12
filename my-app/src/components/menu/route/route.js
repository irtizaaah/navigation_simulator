import "./route.css"
import React, { useState, useEffect, useRef } from 'react';
import Button from '../button/button';

function Route(props){
    return (
      <div className = "route_container">
        <h1>{props.name}</h1>
        <Button 
            name = "Start"
            handleClick = {() => {
              props.setEditStartNode(true);
              props.setEditBlockedNodes(false); 
              console.log("edit start on")
            }
          }
        />
        <Button 
            name = "End"
            handleClick = {() => {
              props.setEditEndNode(true);
              props.setEditBlockedNodes(false); 
              console.log("edit end on")
            }
          }
        />
      </div>
    );
  }

export default Route;