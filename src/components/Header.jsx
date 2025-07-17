import { Link } from "react-router";

export default function Header() {
  return (
    <div className="header">
      <a href="/">Badges</a>
      <a href="/banners">Banners</a>
      <a href="/Cards">Cards</a>
      <a href="/testimonials">Testimonials</a>
      {/* <a href="/tooltips">Tooltips</a>
      <a href="/toasts">Toasts</a> */}
    </div>
  );
}
