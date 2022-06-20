import React from 'react';

const Persons = ({ persons, deletePersonHandler }) => {
  return (
    <>
      {persons.map((person) => (
        <>
          <p key={person.name}>
            {person.name} {person.number}{' '}
            <button onClick={() => deletePersonHandler(person.id)}>
              Delete
            </button>
          </p>
        </>
      ))}
    </>
  );
};

export default Persons;
