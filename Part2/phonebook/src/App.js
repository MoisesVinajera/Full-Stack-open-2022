import { useEffect, useState } from 'react';
import personService from './service/persons';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import SearchList from './components/SearchList';

import './index.css';
import Notification from './components/Notification';

const MESSAGE_SUCCESS_STYLE = 'message-success';
const MESSAGE_ERROR_STYLE = 'message-error';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [notification, setNotification] = useState({});

  useEffect(() => {
    const fetchPersons = async () => {
      try {
        const data = await personService.getAll();
        setPersons(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPersons();
  }, []);

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

  const updatePersonHandler = async (id) => {
    try {
      const newPerson = await personService.update(id, {
        name: newName,
        number: newNumber,
      });
      setPersons((prevState) => {
        return prevState.map((person) =>
          person.id !== id ? person : newPerson
        );
      });
      notificationHandler(
        `${newName} number was changed succesfully`,
        MESSAGE_SUCCESS_STYLE
      );
      setNewName('');
      setNewNumber('');
    } catch (err) {
      notificationHandler(
        `Information of ${newName} has already been removed`,
        MESSAGE_ERROR_STYLE
      );
      setPersons((prevState) => {
        return prevState.filter((person) => person.id !== id);
      });
      setNewName('');
      setNewNumber('');
    }
  };

  const addPersonHandler = async (id) => {
    try {
      const person = await personService.create({
        name: newName,
        number: newNumber,
      });
      setPersons((prevState) => {
        return [...prevState, person];
      });
      notificationHandler(`Added ${newName}`, MESSAGE_SUCCESS_STYLE);
      setNewName('');
      setNewNumber('');
    } catch (err) {
      notificationHandler(err.message, MESSAGE_ERROR_STYLE);
    }
  };

  const addNewNameHandler = async (event) => {
    event.preventDefault();
    const personFounded = persons.find((person) => person.name === newName);

    if (personFounded) {
      if (
        window.confirm(
          `${newName} is already added to Numberbook, replace the old number with a new one`
        )
      ) {
        await updatePersonHandler(personFounded.id);
      }
    } else {
      addPersonHandler();
    }
  };

  const deletePersonHandler = async (id) => {
    if (window.confirm('Do you really want to delete this person?')) {
      try {
        await personService.deletePerson(id);
        setPersons((prevState) => {
          return prevState.filter((person) => person.id !== id);
        });
        notificationHandler(
          `Person was removed succesfully`,
          MESSAGE_SUCCESS_STYLE
        );
      } catch (err) {
        console.log(err);
      }
    }
  };

  const notificationHandler = (message, style) => {
    setNotification({ message, style });
    setTimeout(() => {
      setNotification({});
    }, 5000);
  };

  return (
    <>
      <h2>Numberbook</h2>
      {Object.keys(notification).length > 0 && (
        <Notification
          message={notification.message}
          style={notification.style}
        />
      )}
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
      <Persons persons={persons} deletePersonHandler={deletePersonHandler} />
    </>
  );
};

export default App;
