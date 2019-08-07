import React, { useState, useEffect } from 'react';
import ScoreArea from './ScoreArea';
import Card from './Card';
import './set-game';

const colors = ['red', 'green', 'purple'];
const shapes = ['oval', 'diamond', 'squiggle'];
const patterns = ['filled', 'empty', 'hashed'];

const generateCardData = () => {
  function rand() {
    return Math.floor(Math.random() * Math.floor(3));
  }

  return {
    color: colors[rand()],
    shape: shapes[rand()],
    pattern: patterns[rand()],
    number: rand() + 1
  };
};

const isSet = cards => {
  let colorList = [];
  let shapeList = [];
  let patternList = [];

  cards.forEach(c => {
    if (!colorList.includes(c.color)) {
      colorList.push(c.color);
    }
    if (!shapeList.includes(c.shape)) {
      shapeList.push(c.shape);
    }
    if (!patternList.includes(c.pattern)) {
      patternList.push(c.pattern);
    }
  });

  if (
    (colorList.length === 1 || colorList.length == 3) &&
    (shapeList.length === 1 || shapeList.length === 3) &&
    (patternList.length === 1 || patternList.length === 3)
  ) {
    console.log('FOUND A SET!');
    return true;
  } else {
    console.log(
      `No Set! Colors: ${colorList.length}, Shapes: ${
        shapeList.length
      }, Patterns: ${patternList.length}`
    );
    return false;
  }
};

function SetGame() {
  const [selection, setSelection] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [numSelected, setNumSelected] = useState(0);

  const resetCards = () => {
    const numCards = 12;
    const data = [];

    for (let i = 0; i < numCards; i++) {
      data.push(generateCardData());
    }

    setCardData(data);
    setSelection(new Array(12).fill(false));
  };

  useEffect(() => {
    resetCards();
  }, []);

  useEffect(() => {
    if (numSelected == 3) {
      checkSelection();
    }
  }, [numSelected]);

  useEffect(() => {
    if (cardData.length !== 12) {
      return;
    }
    for (let i = 0; i < 10; i++) {
      for (let j = 1; j < 11; j++) {
        for (let k = 2; k < 12; k++) {
          if (isSet([cardData[i], cardData[j], cardData[k]])) {
            return;
          }
        }
      }
    }
    console.log('Had to reset cards');
    resetCards();
  }, [cardData]);

  const toggleSelection = idx => {
    let temp = [...selection];
    if (selection[idx]) {
      temp[idx] = false;
      setNumSelected(old => old - 1);
    } else {
      temp[idx] = true;
      setNumSelected(old => old + 1);
    }
    setSelection(temp);
  };

  const checkSelection = () => {
    let selectedCards = [];
    selection.map((val, idx) => {
      if (val) {
        selectedCards.push(cardData[idx]);
      }
    });

    if (isSet(selectedCards)) {
      clearSelected();
    }

    setSelection(new Array(12).fill(false));
    setNumSelected(0);
  };

  const clearSelected = () => {
    let newData = Array.from(cardData);

    selection.forEach((s, idx) => {
      if (s) {
        newData[idx] = generateCardData();
      }
    });
    setCardData(newData);
  };

  return (
    <div className="board">
      <ScoreArea />
      <div className="board_card-area">
        {cardData.map((data, idx) => {
          return (
            <Card
              key={idx}
              {...data}
              selected={selection[idx]}
              handleClick={() => toggleSelection(idx)}
            />
          );
        })}
      </div>
      <ScoreArea />
    </div>
  );
}

export default SetGame;
