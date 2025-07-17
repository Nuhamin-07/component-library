export default function Button({ color, shape = "" }) {
  return (
    <div>
      <p>{`${color} - ${shape ? shape : "square"}`}</p>
      <button className={`btn btn-${color} btn-${shape}`}>Badge</button>
    </div>
  );
}
