import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-center px-6">
      <h1 className="text-5xl font-extrabold text-pink-500 drop-shadow-lg">
        ✨ Práctica 03 ✨
      </h1>
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <Link
          to="/tic-tac-toe"
          className="bg-pink-300 hover:bg-pink-400 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all"
        >
          Tic-Tac-Toe Tutorial
        </Link>
        <Link
          to="/gatovspc"
          className="bg-rose-300 hover:bg-rose-400 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all"
        >
          El gato y el ratón contra PC
        </Link>
        <Link
          to="/todo"
          className="bg-fuchsia-300 hover:bg-fuchsia-400 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all"
        >
          To-Do List
        </Link>
      </div>
    </div>
  );
};

export default Home;
