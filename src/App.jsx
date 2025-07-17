import { BrowserRouter, Routes, Route } from "react-router-dom";
import Badge from "./pages/Badge";
import Header from "./components/Header";
import Banner from "./pages/Banner";
import Card from "./pages/Card";
import Testimonial from "./pages/Testimonial";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Badge />} />
          <Route path="/banners" element={<Banner />} />
          <Route path="/cards" element={<Card />} />
          <Route path="/testimonials" element={<Testimonial />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
