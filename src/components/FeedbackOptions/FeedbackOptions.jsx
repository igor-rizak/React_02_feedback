import React from 'react';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button type="button" onClick={() => onLeaveFeedback('good')}>
        good
      </button>
      <button type="button" onClick={() => onLeaveFeedback('neutral')}>
        neutral
      </button>
      <button type="button" onClick={() => onLeaveFeedback('bad')}>
        bad
      </button>
    </div>
  );
};

// Для динамічного рендерингу кнопок
// {
//   options.map(option => (
//     <button key={option} onClick={() => onLeaveFeedback(option)}>
//       {option}
//     </button>
//   ));
// }
