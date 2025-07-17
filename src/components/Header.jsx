import { Link } from "react-router";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">Badges</Link>
      <Link to="/banners">Banners</Link>
      <Link to="/Cards">Cards</Link>
      <Link to="/testimonials">Testimonials</Link>
      {/* <a href="/tooltips">Tooltips</a>
      <a href="/toasts">Toasts</a> */}
    </div>
  );
}
