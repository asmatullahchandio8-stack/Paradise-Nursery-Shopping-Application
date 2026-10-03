import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Home, Leaf } from "lucide-react";
import { useSelector } from "react-redux";

export default function Header() {
  const location = useLocation();
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <Link to="/" className="brand">
        <Leaf size={28} />
        <span>Paradise Nursery</span>
      </Link>

      <nav className="nav">
        <Link className={location.pathname === "/" ? "active" : ""} to="/">
          <Home size={18} /> Home
        </Link>
        <Link className={location.pathname === "/plants" ? "active" : ""} to="/plants">
          Plants
        </Link>
        <Link className={`cart-link ${location.pathname === "/cart" ? "active" : ""}`} to="/cart">
          <ShoppingCart size={21} />
          Cart
          <span className="cart-badge">{cartCount}</span>
        </Link>
      </nav>
    </header>
  );
}