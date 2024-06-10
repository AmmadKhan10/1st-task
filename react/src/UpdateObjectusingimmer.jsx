import {useImmer} from 'use-immer'
function UpdateObjectusingimmer(){
    const [person, updatePerson] = useImmer({
        firstname: 'Ammad',
        lastname: 'khan',
        artwork: {
          title: 'Web Developer',
          city: 'Oghi',
          image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
      });
    
      function handlefirstNameChange(e) {
        updatePerson(draft => {
          draft.firstname = e.target.value;
        });
      }
      function handlelastNameChange(e) {
        updatePerson(draft => {
          draft.lastname = e.target.value;
        });
      }
    
      function handleTitleChange(e) {
        updatePerson(draft => {
          draft.artwork.title = e.target.value;
        });
      }
    
      function handleCityChange(e) {
        updatePerson(draft => {
          draft.artwork.city = e.target.value;
        });
   
    
    }
    return (
        <>
            <label>
        firstName:
        <input
          value={person.firstname}
          onChange={handlefirstNameChange}
        />
      </label>
      <label>
        lastName:
        <input
          value={person.lastname}
          onChange={handlelastNameChange}
        />
      </label>
      <label>
        Title:
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
            {' '}
        {person.firstname}{' '}
        {person.lastname}{' '}
        <br />
        (located in {person.artwork.city})
      </p>
     
        </>
    )
}
export default UpdateObjectusingimmer;