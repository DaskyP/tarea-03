/* eslint-disable react/prop-types */
import { useState } from 'react';
import ReturnButton from '../components/ReturnButton';
function Square({ value, onSquareClick }) {
  return (
    <button
      className="w-20 h-20 text-3xl font-bold flex items-center justify-center border-2 border-pink-300 bg-pink-100 text-pink-700 rounded-lg shadow-md hover:bg-pink-200"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status = winner ? `Ganador: ${winner}` : `Siguiente jugador: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl font-semibold text-pink-600 mb-4">{status}</div>
      <div className="grid grid-cols-3 gap-2">
        {squares.map((square, i) => (
          <Square key={i} value={square} onSquareClick={() => handleClick(i)} />
        ))}
      </div>
    </div>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description = move > 0 ? `Ir al movimiento #${move}` : 'Ir al inicio del juego';
    return (
      <li key={move} className="flex justify-center">
        <button
          className="bg-rose-300 hover:bg-rose-400 text-white font-semibold py-2 px-4 rounded-lg shadow-md "
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="flex items-center justify-center h-screen">
      <ReturnButton />
      <div className="flex bg-white p-6 rounded-2xl shadow-xl">
        <div className="mr-8">
          <h1 className="text-4xl font-extrabold text-pink-700 mb-6 drop-shadow-lg text-center">
            Tic-Tac-Toe 
          </h1>
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>

        <div className="w-60 p-4 bg-rose-100 rounded-xl shadow-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold text-rose-500 mb-3 text-center">Historial</h2>
          <ol className="list-none space-y-2 w-full">{moves}</ol>
        </div>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
