import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import Todo from "./pages/todo";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
