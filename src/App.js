import "./App.css";
import Navbar from "./Components/Navbar.js/Navbar";
import Main from "./Pages/Main/Main";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app-grid">
        <div className="navbar">
          <Navbar />
        </div>
        {/* <img src={"./images/sunflowers.jpg"} className="banner" alt="banner" /> */}
        <div className="app-content">
          <Routes>
            <Route path="/" element={[<Main />]} />
            <Route path="/about" element={[<About />]} />
            <Route path="/projects" element={[<Projects />]} />
            <Route path="/contact" element={[<Contact />]} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
