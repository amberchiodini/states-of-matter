import React, {useContext} from 'react';
import {MatterContext} from '../MatterContext'

export default function Plasma (){
  const context = useContext(MatterContext)  
  console.log("context", context)
  const elements = context.map((element, index) => <li key={index}>{element.name}</li>)

  return (
    <div>
        <h2>Elements</h2>
        <p>{elements}</p>
    </div>
    )
}