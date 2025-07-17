export default function Line({ icon, title, description, status }) {
  return (
    <div className={`line-container ${status}`}>
      <div className="icon-container">
        <span>{icon}</span>
      </div>
      <div className="content-container">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}
