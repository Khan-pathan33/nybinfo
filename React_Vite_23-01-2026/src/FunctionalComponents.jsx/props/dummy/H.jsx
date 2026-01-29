import React from 'react'
import { useState } from 'react'
import I from './I'

function H() {
    let[value,setValue]=useState(10)
  return (
    <div>H
        <I/>
        <h3>This is the value in H {value}</h3>
    </div>
  )
}


export default H