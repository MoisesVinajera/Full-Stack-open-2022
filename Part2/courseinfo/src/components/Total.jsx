import React from 'react';

const Total = ({ parts }) => {
  const countExercises = () =>
    parts.reduce((accumulator, part) => {
      return accumulator + part.exercises;
    }, 0);

  return <h3>Total of {countExercises()} exercises</h3>;
};

export default Total;
