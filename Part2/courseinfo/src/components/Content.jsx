import React from 'react';
import Part from './Part';
import { v4 as uuidv4 } from 'uuid';

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={uuidv4()} part={part} />
      ))}
    </>
  );
};

export default Content;
