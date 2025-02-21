import { Link } from "react-router-dom";

const ReturnButton = () => {
  return (
    <div className="absolute top-4 left-4">
      <Link
        to="/"
        className="bg-pink-400 hover:bg-pink-500 text-white font-semibold py-2 px-5 rounded-full shadow-lg transition-all flex items-center gap-2"
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Volver al Inicio
      </Link>
    </div>
  );
};

export default ReturnButton;
