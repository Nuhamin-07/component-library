export default function Card({ icon, title, description }) {
  return (
    <div className="card-container">
      <div className="icon-container-two">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
