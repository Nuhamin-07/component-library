export default function TestimonialWithImage({
  image,
  icon,
  description,
  name,
  role,
}) {
  return (
    <div className="testimonial-container">
      <div>
        <img className="testimonial-img" src={image} />
      </div>
      <div className="quote-container">
        {icon}
        <p>{description}</p>
        <p>{name}</p>
        <p>{role}</p>
      </div>
    </div>
  );
}
