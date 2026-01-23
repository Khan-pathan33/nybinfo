import React, { Component,Fragment} from 'react'
import Child from './Child'
import C from './C'

function B({ msg }) {
    
  return (
    <Fragment>
        <h2>This is B componenet</h2>
        <h2>This B component {msg}</h2>
        <p>Received msg: {msg}</p>
        <Child />
        <C msg={msg} />
        <p>{msg.age}</p>
    </Fragment>
  )
}


export default B