import React from 'react';

export const Statistics = ({ good, neutral, bad, total, positive }) => {
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
        <li>
          Total: <span>{total}</span>
        </li>
        <li>
          Positive feetback: <span>{positive}%</span>
        </li>
      </ul>
    </div>
  );
};
