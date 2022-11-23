import "./Main.css";

function Main() {

	return (
		<div className="main-grid fade-in">
			<img
				src={"./images/plantcloseup.jpg"}
				alt="plant close up"
				id="main-image1"
			/>
			<div className="image-overlay">
				<div id="main-title1">Welcome to the future of food production</div>

				<div id="main-subtitle1">
					Healthy soils produce healthy food and require less inputs - but also
					require new tools
				</div>

				<div className="text">
					We provide appropriate technology solutions for{" "}
					<span className="bold">regeneration</span>, ranging from traditional IT solutions to sensors
					for measuring soil and crop health, or even advanced <span className="bold">automation</span> using
					robotics.
				</div>

				<div className="text">
					At Listt, we prioritise soil health
					while building thriving food production businesses.
				</div>

			</div>
		</div>
	);
}

export default Main;
