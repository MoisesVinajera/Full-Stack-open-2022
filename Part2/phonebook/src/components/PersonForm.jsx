import React from 'react';

const PersonForm = ({
  newName,
  newNameOnChangeHandler,
  newNumber,
  newNumberOnChangeHandler,
  addNewNameHandler,
}) => {
  return (
    <>
      <form>
        <div>
          name: <input value={newName} onChange={newNameOnChangeHandler} />
        </div>
        <div>
          number:{' '}
          <input value={newNumber} onChange={newNumberOnChangeHandler} />
        </div>
        <div>
          <button type="submit" onClick={addNewNameHandler}>
            add
          </button>
        </div>
      </form>
    </>
  );
};

export default PersonForm;
