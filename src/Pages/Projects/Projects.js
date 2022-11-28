import { useEffect } from "react";
import "./Projects.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import ProjectsData from "../../Data/ProjectsData";
import { Timeline } from "gsap/gsap-core";

function Projects() {
	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		ScrollTrigger.batch(".fade-in", {
			onEnter: batch =>
				gsap.fromTo(
					batch,
					{ y: 50, opacity: 0 },
					{ y: 0, opacity: 1, stagger: 0.18 }
				),
		});
	}, []);

	return (
		<div className="projects-grid">
			{/* <h2 className="subtitle">Projects</h2> */}
			<div className="card-grid">
				{ProjectsData.map((item, key = 0) => (
					<ProjectCard item={item} key={key} />
				))}
			</div>
		</div>
	);
}

export default Projects;
