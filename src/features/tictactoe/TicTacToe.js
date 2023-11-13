import React, { useState } from 'react';
import './ticTac.css';
import Board from './Board';
import Square from './Square';

const TicTacToe = () => {
  const squareLength = () => new Array(9).fill(null);
  const [squares, setSquares] = useState(squareLength());

  const handleSquareClick = (index) => {
    console.log(index, "I" , squares)

    let newSquares = squares;
    newSquares[index] = 'X'
    console.log(squares)
    setSquares( [...newSquares])
    console.log(index, "I" , squares)
  }

  const renderSquare = (index) => {
    return <Square
      key={index}
      value={squares[index]}
      onClick={() => handleSquareClick(index)}
    />
  }

  return (
    <main>
      <Board>
        {squares.map((square, index) => renderSquare(index))}
      </Board>
    </main>
  );
};

export default TicTacToe;
