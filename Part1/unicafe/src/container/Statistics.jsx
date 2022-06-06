import React from 'react';
import ElementCollected from '../components/ElementCollected';
import Title from '../components/Title';

const Statistics = ({ goodValue, neutralValue, badValue, allValue }) => {
  const calculateAverage = () => {
    if (allValue > 0) {
      return (goodValue - badValue) / allValue;
    }
  };

  const calculatePositiveAverage = () => {
    if (allValue > 0) {
      return `${goodValue / allValue} %`;
    }
  };

  return (
    <>
      <Title title="Statistics" />
      <ElementCollected text="Good" value={goodValue} />
      <ElementCollected text="Neutral" value={neutralValue} />
      <ElementCollected text="Bad" value={badValue} />
      <ElementCollected text="All" value={allValue} />
      <ElementCollected text="Average" value={calculateAverage()} />
      <ElementCollected text="Positive" value={calculatePositiveAverage()} />
    </>
  );
};

export default Statistics;
