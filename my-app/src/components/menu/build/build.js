import "./build.css"
import React, { useState, useEffect, useRef } from 'react';
import Button from '../button/button';

function Build(props){
    return (
      <div className = "route_container">
        <h1>{props.name}</h1>
        <Button 
            name = "Block"
            handleClick = {() => {props.setEditBlockedNodes(props.editBlockedNodes ? false : true); console.log("edit block on")}}
        />
      </div>
    );
  }

export default Build;