import { useEffect } from "react";
import "./Projects.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import ProjectsData from "../../Data/ProjectsData";

function Projects() {
	ScrollTrigger.initialize();

	ScrollTrigger.batch(".fade-in", {
		//interval: 0.1, // time window (in seconds) for batching to occur. 
		//batchMax: 3,   // maximum batch size (targets)
		onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: { each: 0.15, grid: [1, 3] }, overwrite: true }),
		onLeave: batch => gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
		onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
		onLeaveBack: batch => gsap.set(batch, { opacity: 0, y: 100, overwrite: true })
		// you can also define things like start, end, etc.
	});


	// when ScrollTrigger does a refresh(), it maps all the positioning data which 
	// factors in transforms, but in this example we're initially setting all the ".box"
	// elements to a "y" of 100 solely for the animation in which would throw off the normal 
	// positioning, so we use a "refreshInit" listener to reset the y temporarily. When we 
	// return a gsap.set() in the listener, it'll automatically revert it after the refresh()!
	ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".fade-in", { y: 0 }));

	return (
		<div className="projects-grid">
			{/* <h2 className="subtitle">Projects</h2> */}
			<div className="card-grid fade-in">
				{ProjectsData.map((item, key = 0) => (
					<ProjectCard item={item} key={key} />
				))}
			</div>
		</div>
	);
}

export default Projects;
