import React from 'react'
import './ClassCompo.css'

function ClassCompo() {
  return (
    <div className='classdiv1'><h1>This is created using class component</h1>
    <p>This is done using external CSS</p>
    <p style={{color:'blue'}}>This is done using internal CSS</p>
    
    </div>
  )
}

export default ClassCompo