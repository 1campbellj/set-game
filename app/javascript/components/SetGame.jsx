import React, { useState, useEffect } from 'react';
import ScoreArea from './ScoreArea';
import Card from './Card';
import './set-game';

const colors = ['red', 'green', 'purple'];
const shapes = ['oval', 'diamond', 'squiggle'];
const patterns = ['filled', 'empty', 'hashed'];

function SetGame() {
  const [selection, setSelection] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [numSelected, setNumSelected] = useState(0);

  useEffect(() => {
    function rand() {
      return Math.floor(Math.random() * Math.floor(3));
    }

    const numCards = 12;
    const data = [];

    for (let i = 0; i < numCards; i++) {
      data.push({
        color: colors[rand()],
        shape: shapes[rand()],
        pattern: patterns[rand()]
      });
    }

    setCardData(data);
    let initialSelection = new Array(12);
    initialSelection.fill(false);
    setSelection(new Array(12).fill(false));
  }, []);

  useEffect(() => {
    if (numSelected == 3) {
      checkSelection();
    }
  }, [numSelected]);

  useEffect(() => {
    console.log('Selection', selection);
  }, [selection]);

  useEffect(() => {
    console.log('NumSelected:', numSelected);
  }, [numSelected]);

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

    let colorList = [];
    let shapeList = [];
    let patternList = [];

    selectedCards.forEach(c => {
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
    } else {
      console.log(
        `No Set! Colors: ${colorList.length}, Shapes: ${
          shapeList.length
        }, Patterns: ${patternList.length}`
      );
    }
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
