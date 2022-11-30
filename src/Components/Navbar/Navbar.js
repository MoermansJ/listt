import "./Navbar.css";
import { Link } from "react-router-dom";
import gsap from "gsap";
import listt from "../../images/listt.png"


function Navbar() {
	const handleClick = e => {
		const time = 250;

		if (
			!e.target.classList.contains("active-nav") &&
			!e.target.classList.contains("navbar-pages")
		) {
			//
			//remove old
			const prevChild = document.getElementsByClassName("active-nav-child")[0];
			const prevParent = document.getElementsByClassName("active-nav")[0];

			gsap.fromTo(
				prevChild,
				{ y: 0 },
				{ y: -10, duration: `0.${time}` }
			);

			setTimeout(() => {
				prevParent.removeChild(prevChild);
				prevParent.classList.remove("active-nav");

				//create new
				const parent = e.target;
				parent.classList.add("active-nav");

				const child = document.createElement("div");
				child.classList.add("active-nav-child");

				parent.append(child);

				gsap.fromTo(
					child,
					{ y: -10 },
					{ y: 0, duration: `0.${time}` }
				);
			}, time);
		}
	};

	return (
		<nav className="navbar-grid">
			{/* <h1 id="navbar-title">listt.io</h1> */}

			<Link to="/listt" id="navbar-logo" >
				<img src={listt} alt="listt logo" />
			</Link>

			<div className="navbar-pages" onClick={handleClick}>
				<Link to="/listt" className="navbar-page active-nav">
					<span id="navbar-main">Main</span>
					<div className="active-nav-child"></div>
				</Link>
				<Link to="/about" className="navbar-page">
					<span id="navbar-about">About</span>
				</Link>
				<Link to="/projects" className="navbar-page">
					<span id="navbar-projects">Projects</span>
				</Link>
				<Link to="/contact" className="navbar-page">
					<span id="navbar-contact">Contact</span>
				</Link>
			</div>
		</nav>
	);
}

export default Navbar;
