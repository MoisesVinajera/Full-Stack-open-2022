import React from 'react';
import StatisticLine from '../components/StatisticLine';
import Title from '../components/Title';

const Statistics = ({ goodValue, neutralValue, badValue, allValue }) => {
  const calculateAverage = () => {
    if (allValue > 0) {
      return (goodValue - badValue) / allValue;
    }
  };

  const calculatePositiveAverage = () => {
    if (allValue > 0) {
      return `${(goodValue / allValue) * 100} %`;
    }
  };

  return (
    <>
      <Title title="Statistics" />
      {allValue > 0 ? (
        <>
          <StatisticLine text="Good" value={goodValue} />
          <StatisticLine text="Neutral" value={neutralValue} />
          <StatisticLine text="Bad" value={badValue} />
          <StatisticLine text="All" value={allValue} />
          <StatisticLine text="Average" value={calculateAverage()} />
          <StatisticLine text="Positive" value={calculatePositiveAverage()} />
        </>
      ) : (
        <p>No given feedback</p>
      )}
    </>
  );
};

export default Statistics;
