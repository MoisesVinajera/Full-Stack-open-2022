import React from 'react';
import Button from '../components/Button';
import Title from '../components/Title';

export const Feedback = ({
  addGoodHandler,
  addNeutralHandler,
  addBadHandler,
}) => {
  return (
    <>
      <Title title="Give feedback" />
      <Button onClickHandler={addGoodHandler} text="Good"></Button>
      <Button onClickHandler={addNeutralHandler} text="Neutral"></Button>
      <Button onClickHandler={addBadHandler} text="Bad"></Button>
    </>
  );
};
