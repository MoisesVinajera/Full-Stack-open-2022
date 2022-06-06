import { useState } from 'react';
import { Feedback } from './container/Feedback';
import Statistics from './container/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGoodHandler = () => {
    setGood((prevState) => {
      return prevState + 1;
    });
  };

  const addNeutralHandler = () => {
    setNeutral((prevState) => {
      return prevState + 1;
    });
  };

  const addBadHandler = () => {
    setBad((prevState) => {
      return prevState + 1;
    });
  };

  return (
    <>
      <Feedback
        addGoodHandler={addGoodHandler}
        addNeutralHandler={addNeutralHandler}
        addBadHandler={addBadHandler}
      />
      <Statistics
        goodValue={good}
        neutralValue={neutral}
        badValue={bad}
        allValue={good + neutral + bad}
      />
    </>
  );
};

export default App;
