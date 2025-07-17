export default function TestimonialWithNoImage({
  icon,
  description,
  name,
  role,
}) {
  return (
    <div className="testimonial-container quote">
      <div className="testimonial-header">
        {icon}
        <h3>
          Work<span>cation</span>
        </h3>
      </div>
      <p>{description}</p>
      <p>
        {name} /<span>{role}</span>
      </p>
    </div>
  );
}
