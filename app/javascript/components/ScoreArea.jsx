import React from 'react';

import './score-area';

const ScoreArea = props => {
  let areaClass = 'score-area';
  if (props.currentUser == props.userId) {
    areaClass += ' score-area--active';
  }

  let sumScores = 0;
  props.scores.forEach(score => {
    sumScores += score;
  });

  return (
    <div className={areaClass} onClick={() => props.setUser(props.userId)}>
      <span>Your Score: {props.scores[props.userId]}</span>
      <span>Pairs Left: {81 - sumScores}</span>
      <button onClick={() => props.resetGame()}>Reset</button>
    </div>
  );
};

export default ScoreArea;
