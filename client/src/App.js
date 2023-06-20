import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Browse from "./pages/Browse";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Feedback from "./pages/Feedback";
import Recipe from "./pages/Recipe";
import About from "./pages/About";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/browse" element={<Browse />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/feedback" element={<Feedback />}></Route>
          <Route path="/browse/recipes/:id" element={<Recipe />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
