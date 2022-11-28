import "./App.css";
import Navbar from "./Components/Navbar.js/Navbar";
import Main from "./Pages/Main/Main";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

	return (
		<Router>
			<Navbar />
			<div className="app-grid">
				<Routes>
					<Route path="/" element={[<Main />]} />
					<Route path="/about" element={[<About />]} />
					<Route path="/projects" element={[<Projects />]} />
					<Route path="/contact" element={[<Contact />]} />
				</Routes>
			</div>
		</Router >
	);
}

export default App;
