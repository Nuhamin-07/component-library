import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faTriangleExclamation,
  faCircleXmark,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import Line from "../components/Line";
export default function Banner() {
  const banners = [
    {
      icon: faCircleCheck,
      title: "Congratulations!",
      description:
        "Congratulations on your outstanding achievement! Your hard work and dedication have truly paid off. Well done!",
      status: "success",
    },
    {
      icon: faTriangleExclamation,
      title: "Attention",
      description:
        "Warning: You are about to access secure content. Unauthorized use is prohibited.",
      status: "warning",
    },
    {
      icon: faCircleXmark,
      title: "There is a problem with your application",
      description:
        "An error has occurred. Please try again later or contact support if the issue persists.",
      status: "error",
    },
    {
      icon: faCircleInfo,
      title: "Update",
      description:
        "We've made some updates! Refresh the page and see the latest changes we made.",
      status: "neutral",
    },
  ];
  //"success", "warning", "error", "neutral"
  return (
    <>
      <h1>Banners</h1>
      <div className="main-container">
        <div className="container">
          {banners.map((banner, index) => (
            <Line
              key={index}
              icon={
                <FontAwesomeIcon icon={banner.icon} className={banner.status} />
              }
              title={banner.title}
              description={banner.description}
              status={banner.status}
            />
          ))}
        </div>
        <div className="container-two">
          {banners.map((banner, index) => (
            <Line
              key={index}
              icon={
                <FontAwesomeIcon icon={banner.icon} className={banner.status} />
              }
              title={banner.title}
              status={banner.status}
            />
          ))}
        </div>
      </div>
    </>
  );
}
