import React from 'react'
import { useState } from 'react'

function Parent(props) {
    console.log(props)
    let [a,b]=useState(100)
    console.log(a,b)
  return (
    <div>
        {props.value}
    </div>
  )
}

export default Parent