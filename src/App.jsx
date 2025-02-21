import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import CatAndMouseGame from "./pages/CatAndMouseGame";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tic-tac-toe" element={<Game />} />
        <Route path="/tic-tac-toe-ai" element={<CatAndMouseGame />} />
      </Routes>
    </Router>
  );
}

export default App;
