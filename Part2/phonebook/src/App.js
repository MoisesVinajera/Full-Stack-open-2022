import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const newNameOnChangeHandler = (event) => {
    setNewName(event.target.value);
  };

  const addNewNameHandler = (event) => {
    event.preventDefault();
    setPersons((prevState) => {
      return [...prevState, { name: newName }];
    });
    setNewName('');
  };

  return (
    <>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={newNameOnChangeHandler} />
        </div>
        <div>
          <button type="submit" onClick={addNewNameHandler}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>{person.name}</p>
      ))}
    </>
  );
};

export default App;
