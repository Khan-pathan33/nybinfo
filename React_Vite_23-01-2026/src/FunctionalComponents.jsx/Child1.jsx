import React from "react";

function Child1({ childern}){
    return (
        <div>
            <h3>child1 component</h3>
            {childern}
            <p> this is a nested child component</p>
        
        </div>
    )
}

export default Child1;
