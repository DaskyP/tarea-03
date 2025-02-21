/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Square from "./Square";

const GameBoard = ({ setWinner, reset, setHasStarted }) => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isCatTurn, setIsCatTurn] = useState(true);

  useEffect(() => {
    if (reset) {
      setSquares(Array(9).fill(null));
      setIsCatTurn(true);
      setWinner(null);
      setHasStarted(false);
    }
  }, [reset, setWinner, setHasStarted]);

  useEffect(() => {
    if (!isCatTurn) {
      setTimeout(() => makePcMove(), 500);
    }
  }, [isCatTurn]);

  const handleClick = (i) => {
    if (squares[i] || checkWinner(squares) || !isCatTurn) return;

    const newSquares = squares.slice();
    newSquares[i] = "🐱";
    setSquares(newSquares);
    setHasStarted(true); 

    const winner = checkWinner(newSquares);
    if (winner) {
      setWinner(winner);
      return;
    }

    setIsCatTurn(false);
  };

  const makePcMove = () => {
    const winner = checkWinner(squares);
    if (winner) return;

    const emptySquares = squares
      .map((val, index) => (val === null ? index : null))
      .filter((val) => val !== null);

    if (emptySquares.length > 0) {
      const randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];
      const newSquares = squares.slice();
      newSquares[randomIndex] = "🐭";
      setSquares(newSquares);

      const winner = checkWinner(newSquares);
      if (winner) {
        setWinner(winner);
        return;
      }

      setIsCatTurn(true);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-2 mt-6">
      {squares.map((value, i) => (
        <Square key={i} value={value} onSquareClick={() => handleClick(i)} />
      ))}
    </div>
  );
};

const checkWinner = (squares) => {
  const winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (let [a, b, c] of winningPatterns) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default GameBoard;
