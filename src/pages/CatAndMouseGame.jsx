import { useState } from "react";
import GameBoard from "../components/GameBoard";
import ReturnButton from "../components/ReturnButton";

const CatAndMouseGame = () => {
  const [winner, setWinner] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center relative">
      <ReturnButton />
      <h1 className="text-5xl font-extrabold text-pink-600 drop-shadow-lg mb-6">
        Cat & Mouse vs PC 
      </h1>
      <GameBoard setWinner={setWinner} />
      {winner && (
        <div className="mt-4 text-2xl font-semibold text-rose-500">
          🎉 {winner} ha ganado 🎉
        </div>
      )}
    </div>
  );
};

export default CatAndMouseGame;
