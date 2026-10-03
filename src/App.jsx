import { Routes, Route, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AboutUs from "./AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";

function Home() {
  return (
    <main className="landing">
      <div className="landing-overlay">
        <div className="landing-content">
          <p className="eyebrow">Welcome to your little paradise</p>
          <h1>Paradise Nursery</h1>
          <AboutUs />
          <Link to="/plants" className="get-started">
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}