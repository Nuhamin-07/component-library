import Button from "../components/Button";

export default function Badge() {
  const colors = [
    "gray",
    "red",
    "yellow",
    "green",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
  ];
  return (
    <>
      <h1>BADGES</h1>
      <div className="badge">
        <span>Square</span>
        {colors.map((color, index) => (
          <Button key={index} color={color} />
        ))}
      </div>
      <div className="badge">
        <span>Pill</span>
        {colors.map((color, index) => (
          <Button key={index} color={color} shape="pill" />
        ))}
      </div>
    </>
  );
}
