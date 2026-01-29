import React from 'react'
import { useState } from 'react'

function G() {
    let[value, setValue]=useState(10)
  return (
    <div>G
        <h3>This is the value in G {value}</h3>
    </div>
  )
}
export default G
