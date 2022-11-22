import "./Main.css";

function Main() {
  return (
    <div className="main-grid">
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
          At Listt we provide the appropriate technology solutions for{" "}
          <span className="bold">regeneration</span>, prioritising soil health
          while building thriving food production businesses.
        </div>

        <div className="text">
          In order to better understand the type of problems we could be
          solving, Listt is working with Innovate UK to explore and develop{" "}
          <span className="bold">autonomous soil health monitoring </span>{" "}
          systems by integrating low cost hardware with widely available
          software stacks. From traditional IT solutions to connected sensors
          for measuring soil and crop health, or even advanced automation using
          robotics.
        </div>

        <div className="text">
          It’s good business when your food production uses less resources,
          farmers and growers are <span className="bold">more in control</span>{" "}
          over their economics and less reliant on long supply chains.
        </div>
      </div>
    </div>
  );
}
// appropriate technology solutions for regeneration
export default Main;
