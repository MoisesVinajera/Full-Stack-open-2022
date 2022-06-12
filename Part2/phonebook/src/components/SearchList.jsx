import React from 'react';

const SearchList = ({ searchList }) => {
  return (
    <>
      {searchList.length !== 0 ? <h2>Search List</h2> : ''}
      {searchList
        ? searchList.map((person) => (
            <p key={person.name}>
              {person.name} {person.number}
            </p>
          ))
        : ''}
    </>
  );
};

export default SearchList;
