import logo from './logo.svg';
import './App.css';
import FunctionalCompo from './FunctionalCompo';
import { useState } from 'react';
import ClassCompo from './ClassCompo';

function App() {
  const [numone,setFirst] = useState(false)
  const [numtwo,setTwo] = useState(false)
  const FirstFunc = ()=>{
    setFirst(!numone)
  }
  const SecFunc = () => {
    setTwo(!numtwo)
  }
  
  return (
    <div>
      <h1 className='h1' > Styling using functional and class component</h1>
      <div className='div1'>
        <button onClick={FirstFunc} className='btn'>To see styling in functional component</button>
        <button onClick={SecFunc} className='btn'>To see styling in class component</button>
      </div>
      <div className='div2'>
        {numone ? <FunctionalCompo/>:null}
        {numtwo ? <ClassCompo/>:null}
      </div>
    </div>
    
  );
}

export default App;
