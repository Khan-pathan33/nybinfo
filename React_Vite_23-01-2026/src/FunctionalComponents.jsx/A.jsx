import React from 'react'
import { StrictMode } from 'react';
import B from './B';

function A() {
    let hi={age:2};
    console.log(hi)
    const message = "Hello from A";
  return (
    <StrictMode>
        <div>
           <h2> This is A component </h2>
           <B msg={message} />
            </div>
    <h1>{hi.age}</h1>
    
    </StrictMode>
  )
}

export default A