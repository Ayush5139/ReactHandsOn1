import React from 'react';
import './FunctionaCompo.css';

function FunctionalCompo() {
  return (
    <div className='funcdiv1'><h1>This is created using functional component</h1> 

    <p>This is done using external CSS</p>
    <p style={{color:'blue'}}>This is done using internal CSS</p>
    
    </div>
  )
}

export default FunctionalCompo