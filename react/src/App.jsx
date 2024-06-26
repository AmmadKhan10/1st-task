import PracticeQuestions from './PracticeQuestion'
import './App.css'
import { useState } from 'react'
import { sculptureList } from './Sculpturelist';
import Inputsfield from './Question3Inputsfield';
import UpdateObjectusingSpread from './UpdateObjectusingSpread';
import UpdateObjectusingimmer from './UpdateObjectusingimmer';

function App() {
//  -------------------Question no 2 js start here-----------------------
  const [index ,setIndex] = useState(0);
  function handleClick() {
    setIndex(index + 1);
    if (index ===11){
        setIndex(0)
    }
  }
  function handleBack() {
    setIndex(index - 1);
    if (index ===0){
        setIndex(11)
    }
  }
  let sculpture = sculptureList[index];

  //  -------------------Question no 2 js end here-----------------------

  //  -------------------Question no 3 js start here-----------------------
 
  //  -------------------Question no 3 js end here-----------------------
  
  return (
    <>
      <div>
        <h1>Question No 01(StopPropagation)</h1>
       <PracticeQuestions/>
      </div>

      <div style={{marginTop:"5vw"}}>
        <h1>Question No 02(on state)</h1>
        
      <button onClick={handleClick} disabled ={(index==11?true:false)}>
        Next
      </button>
      
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index} of {sculptureList.length-1})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
      
      <button onClick={handleBack} disabled={(index ==0)? true:false}>
        Back
      </button>
      
      </div>
      <div style={{marginTop:"5vw"}}>
      <h1>Question No 03(on state)</h1>
      <Inputsfield/>
      </div>

      <div>
        <h1>Updating Objects using spread method</h1>
        <UpdateObjectusingSpread/>
      </div>
      <div>
        <h1>Updating Objects using use-immer method</h1>
        <UpdateObjectusingimmer/>
      </div>
    </>

  )
}

export default App
