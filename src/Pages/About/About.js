import "./About.css";
import TeamProfileCard from "../../Components/TeamProfileCard/TeamProfileCard";
import TeamProfileData from "../../Data/TeamProfileData";

function About() {
	return (
		<div className="about-grid">

			<div className="top-image-flex">
				<span>Technological solutions for regeneration</span>
				<img src={process.env.PUBLIC_URL + "/images/about1.jpg"} className="top-image" alt="" />
			</div>

			<div className="about-flex">
				<p className="subtitle">
					Having worked as an engineer for some years, I have developed skills and a
					network of professionals who can provide solutions for even the most complex technical problems.
				</p>

				<p className="text">
					Listt grew out of the desire to develop appropriate technology solutions for regenerative
					agriculture. This brand of farming places an emphasis on prioritising soil health while
					building thriving food production businesses. It’s a climate solution - well managed soils
					sequester carbon - scaled to a global scale, this is a significant tool to cool our planet.
				</p>

				<p className="text">
					Healthy soils produce healthy food and require less inputs - but also require new tools (less
					tillage and chemicals mean more weeds and manual tasks). Finally, it’s good business -
					when your food production uses less resources, growers and farmers are more in control of
					their economics and less reliant on long supply chains.
				</p>

				<p className="text">
					Currently the company is engaged in a project funded by Innovate UK to explore
					autonomous soil health monitoring systems. <br />
					This is being done by integrating relatively low
					cost hardware with widely available software stacks. We want to develop a demonstrator unit
					and to start visiting farms in earnest from early 2023.
				</p>

				<span className="subtitle">Meet the team</span>

				<div className="team-profiles">
					{TeamProfileData.map((item, key = 0) => (
						<TeamProfileCard item={item} key={key} />
					))}
				</div>
			</div>

		</div >
	);
}

//soilhands Photo by Mikhail Nilov: https://www.pexels.com/photo/person-with-soil-on-hands-8543583/
//plantcloseup Photo by PhotoMIX Company: https://www.pexels.com/photo/closeup-photo-of-sprout-1002703/

export default About;
