import "./TeamProfileCard.css";

function TeamProfileCard({ item }) {
  const { image, name, title } = item;

  return (
    <div className="card">
      <div className="card-top">
        <img src={image} alt="team profile picture" className="card-image" />
      </div>
      <div className="card-bottom">
        <span className="card-title">{title}</span>
        <span className="card-name">{name}</span>
      </div>
    </div>
  );
}

export default TeamProfileCard;
