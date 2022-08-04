import React from 'react'
import Like from './button.js'

export function Beer(props) {
 return (
    <li className="image">
      <h3>{props.name}</h3>
      <img
       style={{ height: "200px" }}
       src={props.image}
       alt={props.name} />
       <Like/>
      </li>
      );
    }

  
  export default Beer;