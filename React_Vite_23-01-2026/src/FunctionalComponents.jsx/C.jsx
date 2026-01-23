import React from 'react'

function C({ msg}) {
    let age=10
  return (
    <div>
        <h2>This is C component {age}</h2>
        <p>{msg}</p>
        <p>Message from B: {msg}</p>
    </div>
  )
}

export default C