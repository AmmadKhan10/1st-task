import { useState } from "react";
function UpdateObjectusingSpread(){
    const [person, setPerson] = useState({
        firstName: 'Ammad',
        lastName: 'Khan',
        fatherName: 'M Ilyas Khan',
        email: 'ak532151@gmail.com',
      });
    
      function handleFirstNameChange(e) {
       setPerson({
         ...person,
         firstName: e.target.value
         
       });
        }
    
      function handleLastNameChange(e) {
         setPerson({
         ...person,
         lastName: e.target.value
         
       });
      }
      function handlefatherNameChange(e) {
         setPerson({
         ...person,
         fatherName: e.target.value
         
       });
      }
    
      function handleEmailChange(e) {
         setPerson({
         ...person,
         email: e.target.value
         
       });
      }
    
    return(
        <>
             <label>
        First name:
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
       <label>
        Father Name:
        <input
          value={person.fatherName}
          onChange={handlefatherNameChange}
        />
      </label>
      <label>
        Email:
        <input
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        {person.fatherName}{' '}
        ({person.email})
      </p>
        </>
    )
}
export default UpdateObjectusingSpread;