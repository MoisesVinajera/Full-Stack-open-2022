import React from 'react';

const Total = ({ parts }) => {
  const countExercises = () =>
    parts.reduce((accumulator, part) => {
      return accumulator + part.exercises;
    }, 0);

  return <h4>Total of {countExercises()} exercises</h4>;
};

export default Total;
