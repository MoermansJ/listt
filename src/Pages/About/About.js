import "./About.css";
import TeamProfileCard from "../../Components/TeamProfileCard/TeamProfileCard";
import TeamProfileData from "../../Data/TeamProfileData";

function About() {
	return (
		<div className="about-grid">
			{/* <h2 className="subtitle" id="about-title1">
        Who are we?
      </h2>
      <p className="text" id="about-text1">
        Having worked as an engineer for some years I have developed skills and
        a network of professionals who are excellent at solving complex
        technical problems.
      </p>
      <img
        src={"./images/soilhands.jpg"}
        className="about-image"
        id="about-image1"
        alt="soil hands"
      />

      <p className="text" id="about-text2">
        <br />I now want to grow my network in farming and agriculture, to
        better understand the type of problems we could be solving - from
        traditional IT solutions to connected sensors for soil and crop health
        measurements or even advanced automation using robotics.
      </p>
      <img
        src={"./images/plantcloseup.jpg"}
        className="about-image"
        id="about-image2"
        alt="plant close up"
      />
      <h2 className="subtitle" id="about-title2">
        Meet the team
      </h2>
      <div className="cards-grid">
        {TeamProfileData.map((item, key = 0) => (
          <TeamProfileCard item={item} key={key} />
        ))}
      </div> */}
		</div>
	);
}

//soilhands Photo by Mikhail Nilov: https://www.pexels.com/photo/person-with-soil-on-hands-8543583/
//plantcloseup Photo by PhotoMIX Company: https://www.pexels.com/photo/closeup-photo-of-sprout-1002703/

export default About;
