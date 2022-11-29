import "./TeamProfileCard.css";

function TeamProfileCard({ item }) {
	const { image, name, title, description } = item;

	return (
		<div className="card">

			<div className="card-image" />
			{/* ^^replace with img */}

			<div className="card-right">
				<span className="card-name">{name}</span>
				<span className="card-title">{title}</span>
				<span className="card-icons">Twitter, LinkedIn icons etc... </span>
				<div className="divider-line" />
				<div className="card-description">{description}</div>
				<div className="divider-line" />
			</div>

		</div>
	);
}

export default TeamProfileCard;
