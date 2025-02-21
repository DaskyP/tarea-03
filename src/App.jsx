import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import CatAndMouseGame from "./pages/CatAndMouseGame";
import ToDoList from "./pages/ToDoList";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tic-tac-toe" element={<Game />} />
        <Route path="/gatovspc" element={<CatAndMouseGame />} />
        <Route path="/todo" element={<ToDoList />} />
      </Routes>
    </Router>
  );
}

export default App;
