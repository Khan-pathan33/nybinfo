import React, { useState } from 'react'
import './Accordion.css'
import {Minus, Plus} from 'lucide-react'
import accordionData from './Data'

const Accordion = () => {

  const [click, setClick] = useState(false)
  const toggleData = (index)=>{
    setClick(click === index ? null : index)
  }
  return (
    <div className='container'>
       {
        accordionData.map((value,index)=> {
          return(
             <div className='inner-container' key={value.id} onClick={()=>toggleData(index)}>
            <div className='top'>
                <h3>{value.question}</h3>
                {
                  click === index ? <Minus className='icon' /> : <Plus className='icon' />
                }

            </div>

            <div>
                {
                  click=== index ? <p>{value.answer}</p> : null
                }
                </div>
        </div>
          )
        })
       }
    </div>
  )
}

export default Accordion