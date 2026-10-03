import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { categories } from "../data/plants";
import Header from "./Header";

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <div className="page">
      <Header />

      <main className="products-page">
        <div className="page-heading">
          <p className="eyebrow">Our collection</p>
          <h1>Find Your Perfect Plant</h1>
          <p>
            Explore our carefully selected plants and turn your home into a
            peaceful green paradise.
          </p>
        </div>

        {categories.map((category) => (
          <section className="category" key={category.id}>
            <div className="category-heading">
              <div>
                <h2>{category.name}</h2>
                <p>{category.description}</p>
              </div>
            </div>

            <div className="product-grid">
              {category.plants.map((plant) => {
                const added = isInCart(plant.id);

                return (
                  <article className="product-card" key={plant.id}>
                    <img src={plant.image} alt={plant.name} />
                    <div className="product-info">
                      <span className="category-label">{category.name}</span>
                      <h3>{plant.name}</h3>
                      <div className="product-bottom">
                        <strong>${plant.price.toFixed(2)}</strong>
                        <button
                          className="add-button"
                          disabled={added}
                          onClick={() => dispatch(addToCart(plant))}
                        >
                          {added ? "Added ✓" : "Add to Cart"}
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}