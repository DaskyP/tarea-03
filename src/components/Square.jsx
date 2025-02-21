/* eslint-disable react/prop-types */

const Square = ({ value, onSquareClick }) => {
  return (
    <button
      className="w-20 h-20 text-3xl font-bold flex items-center justify-center border-2 border-pink-400 bg-white text-pink-700 rounded-lg shadow-md hover:bg-pink-200 transition-all"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
