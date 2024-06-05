import { useState } from "react";
function Inputsfield() {
    const [firstName ,setFirstName] =useState('')
    const [lastName ,setLastName]= useState('')
  
    function handleFirstNameChange(e) {
      setFirstName (e.target.value);
    }
  
    function handleLastNameChange(e) {
      setLastName (e.target.value);
    }
  
    function handleReset() {
      setFirstName('');
      setLastName('');
    }
    return(
        <>
        <div>
            <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
      </div>

        </>

    )
}
export default Inputsfield;