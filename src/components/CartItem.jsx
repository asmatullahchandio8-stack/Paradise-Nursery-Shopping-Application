import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react";
import Header from "./Header";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from "../redux/CartSlice";

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="page">
        <Header />
        <main className="cart-page empty-cart">
          <div className="empty-icon">🪴</div>
          <h1>Your cart is empty</h1>
          <p>Add some beautiful plants to your cart to get started.</p>
          <Link to="/plants" className="primary-button">
            Continue Shopping
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="page">
      <Header />

      <main className="cart-page">
        <div className="cart-title">
          <div>
            <p className="eyebrow">Your selection</p>
            <h1>Shopping Cart</h1>
          </div>
          <div className="cart-summary-mini">
            <span>{totalItems} {totalItems === 1 ? "plant" : "plants"}</span>
            <strong>${totalCost.toFixed(2)}</strong>
          </div>
        </div>

        <div className="cart-layout">
          <section className="cart-items">
            {items.map((item) => (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-info">
                  <span>Houseplant</span>
                  <h2>{item.name}</h2>
                  <p>${item.price.toFixed(2)} each</p>
                </div>

                <div className="quantity-control">
                  <button
                    aria-label={`Decrease ${item.name}`}
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    <Minus size={16} />
                  </button>
                  <strong>{item.quantity}</strong>
                  <button
                    aria-label={`Increase ${item.name}`}
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <div className="item-total">
                  <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                  <button
                    className="delete-button"
                    aria-label={`Delete ${item.name}`}
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </article>
            ))}
          </section>

          <aside className="checkout-card">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Total Plants</span>
              <strong>{totalItems}</strong>
            </div>
            <div className="summary-row">
              <span>Total Cost</span>
              <strong>${totalCost.toFixed(2)}</strong>
            </div>

            <button
              className="checkout-button"
              onClick={() => alert("Coming Soon!")}
            >
              Checkout
            </button>

            <Link to="/plants" className="continue-button">
              <ArrowLeft size={17} />
              Continue Shopping
            </Link>
          </aside>
        </div>
      </main>
    </div>
  );
}