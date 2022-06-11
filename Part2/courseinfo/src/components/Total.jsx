import React from 'react';

const Total = ({ parts }) => {
  return (
    <h3>
      Total of{' '}
      {parts.reduce((accumulator, part) => {
        return accumulator + part.exercises;
      }, 0)}{' '}
      exercises
    </h3>
  );
};

export default Total;
