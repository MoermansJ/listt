import "./ProjectCard.css";

function ProjectCard({ item }) {
	const { title, description, image } = item;

	return (
		<div className="projectcard">
			<img src={image} alt="project thumbnail" className="projectcard-image" />
			<div className="projectcard-overlay">
				<div className="projectcard-title">{title}</div>
				<div className="projectcard-description">{description}</div>
				<div className="projectcard-button">DISCOVER MORE</div>
			</div>
		</div>
	);
}

export default ProjectCard;
