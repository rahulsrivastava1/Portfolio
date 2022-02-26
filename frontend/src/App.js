import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Routes>
        <Route path="/skills" element={<Skill />}></Route>
      </Routes>
      <Routes>
        <Route path="/works" element={<Work />}></Route>
      </Routes>
      <Routes>
        <Route path="/resume" element={<Resume />}></Route>
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
