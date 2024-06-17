import React from 'react';

export const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <ul>
        <li>
          Good: <span>{good}</span>
        </li>
        <li>
          Neutral: <span>{neutral}</span>
        </li>
        <li>
          Bad: <span>{bad}</span>
        </li>
      </ul>
    </div>
  );
};
