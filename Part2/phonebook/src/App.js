import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '999-999999' },
  ]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const newNameOnChangeHandler = (event) => {
    setNewName(event.target.value);
  };

  const newPhoneOnChangeHandler = (event) => {
    setNewPhone(event.target.value);
  };

  const addNewNameHandler = (event) => {
    event.preventDefault();
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons((prevState) => {
        return [...prevState, { name: newName, phone: newPhone }];
      });
      setNewName('');
      setNewPhone('');
    }
  };

  return (
    <>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={newNameOnChangeHandler} />
        </div>
        <div>
          number: <input value={newPhone} onChange={newPhoneOnChangeHandler} />
        </div>
        <div>
          <button type="submit" onClick={addNewNameHandler}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>
          {person.name} {person.phone}
        </p>
      ))}
    </>
  );
};

export default App;
