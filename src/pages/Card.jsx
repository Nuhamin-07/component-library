import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import CardComponent from "../components/CardComponent";

export default function Card() {
  return (
    <>
      <h1 className="card-header">Cards</h1>
      <div className="container-card">
        <CardComponent
          title="Easy Deployment"
          description="The system is designed for quick and straightforward deployment with minimal setup. It supports automated installation, clear configuration steps, and compatibility with common environments, allowing users to get started with minimal effort."
          icon={
            <FontAwesomeIcon icon={faCloudArrowUp} className="cloud-icon" />
          }
        />
      </div>
    </>
  );
}
