import React from "react";
import { StrictMode } from "react";
import Child1 from "./Child1";

function Child({name, age}) {
    return (
     <StrictMode>
     <div>
            <h3>Child Component</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <Child1 />
        </div>
        </StrictMode>
    )
}
export default Child;
