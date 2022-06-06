import { useState } from 'react';
import { Feedback } from './container/Feedback';
import Statistics from './container/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGoodHandler = () => {
    setGood((prevState) => prevState + 1);
  };

  const addNeutralHandler = () => {
    setNeutral((prevState) => prevState + 1);
  };

  const addBadHandler = () => {
    setBad((prevState) => prevState + 1);
  };

  return (
    <>
      <Feedback
        addGoodHandler={addGoodHandler}
        addNeutralHandler={addNeutralHandler}
        addBadHandler={addBadHandler}
      />
      <Statistics goodCount={good} neutralCount={neutral} badCount={bad} />
    </>
  );
};

export default App;
