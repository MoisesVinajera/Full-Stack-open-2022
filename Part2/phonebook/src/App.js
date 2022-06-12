import { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import SearchList from './components/SearchList';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchList, setSearchList] = useState([]);

  const newNameOnChangeHandler = (event) => {
    setNewName(event.target.value);
  };

  const newNumberOnChangeHandler = (event) => {
    setNewNumber(event.target.value);
  };

  const searchNameOnChangeHandler = (event) => {
    setSearchList(() => {
      return persons.filter(
        (person) =>
          person.name
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) &&
          event.target.value !== ''
      );
    });
  };

  const addNewNameHandler = (event) => {
    event.preventDefault();
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to Numberbook`);
    } else {
      setPersons((prevState) => {
        return [...prevState, { name: newName, number: newNumber }];
      });
      setNewName('');
      setNewNumber('');
    }
  };

  return (
    <>
      <h2>Numberbook</h2>
      <Filter onChange={searchNameOnChangeHandler} />
      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        newNameOnChangeHandler={newNameOnChangeHandler}
        newNumber={newNumber}
        newNumberOnChangeHandler={newNumberOnChangeHandler}
        addNewNameHandler={addNewNameHandler}
      />
      <SearchList searchList={searchList} />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </>
  );
};

export default App;
