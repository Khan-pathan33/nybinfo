import React from 'react'

function parent() {
     const user = "khan";
  const age = 20;
  return (
    <>
    <div>parent</div>
    <h2>Parent Component</h2>
      <Child name={user} age={age} />
      <Child1>
        <p>This is passed using children prop</p>
      </Child1></>
    
  )
}

export default parent