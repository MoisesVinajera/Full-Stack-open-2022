import React from 'react';
import ElementCollected from '../components/ElementCollected';
import Title from '../components/Title';

const Statistics = ({ goodCount, neutralCount, badCount }) => {
  return (
    <>
      <Title title="Statistics" />
      <ElementCollected text="Good" count={goodCount} />
      <ElementCollected text="Neutral" count={neutralCount} />
      <ElementCollected text="Bad" count={badCount} />
    </>
  );
};

export default Statistics;
