import React from 'react'
import { useState } from 'react'

function I() {
    let[value,setValue]=useState(10)
  return (
    <div>I
        <h3>This is the value in I {value}</h3>
    </div>
  )
}

export default I