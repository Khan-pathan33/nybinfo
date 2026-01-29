import React from 'react'
import C from './C'

function B(props) {
  return (
    <div>
        <h3>this is in the B componet {props.value}</h3>
        <Child value={props} />
    </div>
  )
}

export default B