import "./Projects.css";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";

function Projects() {
  return (
    <div className="projects-grid">
      {/* <h2 className="subtitle">Projects</h2> */}
      <div className="card-grid">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default Projects;
