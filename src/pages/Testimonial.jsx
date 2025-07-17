import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faHouseFlag } from "@fortawesome/free-solid-svg-icons";
import TestimonialWithImage from "../components/TestimonialWithImage";
import TestimonialWithNoImage from "../components/TestimonialWithNoImage";
import client from "../assets/Client.jpg";

export default function Testimonial() {
  const description =
    "Working with this team has been an incredible experience. They are highly professional, responsive, and truly committed to delivering quality results. Thanks to their support, our project was completed on time and exceeded expectations. I would gladly recommend their services to anyone looking for reliable and skilled professionals.";
  const name = "May Andersons";
  const role = "Workcation, CTO";
  return (
    <div className="test-container">
      <TestimonialWithImage
        image={client}
        icon={
          <FontAwesomeIcon className="testimonial-icon" icon={faQuoteLeft} />
        }
        description={description}
        name={name}
        role={role}
      />
      <TestimonialWithNoImage
        icon={<FontAwesomeIcon className="second-icon" icon={faHouseFlag} />}
        description={description}
        name={name}
        role={role}
      />
    </div>
  );
}
