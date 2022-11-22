import "./Projects.css";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import ProjectsData from "../../Data/ProjectsData";

function Projects() {
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
