import { useState } from "react";
import GameBoard from "../components/GameBoard";
import ReturnButton from "../components/ReturnButton";

const CatAndMouseGame = () => {
  const [winner, setWinner] = useState(null);
  const [reset, setReset] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const resetGame = () => {
    setWinner(null);
    setReset(true);
    setHasStarted(false); 
    setTimeout(() => setReset(false), 100);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center relative">
      <ReturnButton />
      <h1 className="text-5xl font-extrabold text-pink-600 drop-shadow-lg mb-6">
        El gato y el ratón vs PC
      </h1>
      <GameBoard setWinner={setWinner} reset={reset} setHasStarted={setHasStarted} />

      {winner && (
        <div className="mt-4 text-2xl font-semibold text-rose-500">
          🎉 {winner} ha ganado 🎉
        </div>
      )}

      <div
        className={`mt-6 transition-all duration-500 transform ${
          hasStarted
            ? "opacity-100 scale-100 animate-[bounce_0.5s_ease-out_2]"
            : "opacity-0 scale-90"
        }`}
      >
        <button
          onClick={resetGame}
          className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-5 rounded-full shadow-md transition-all"
        >
        Reiniciar Juego
        </button>
      </div>
    </div>
  );
};

export default CatAndMouseGame;
