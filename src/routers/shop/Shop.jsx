import React from "react";
// import "./Karzinka.css";
import useCartStore from "../../context/cartSlice";
// import useCartStore from "../../components/context/bears";

const Shop = () => {
  const { carts, removeFromCart, decrementCart, addToCart } = useCartStore();

  return (
    <section className="shop">
      <div className=" container">
        {carts.length === 0 ? (
          <h1 style={{ marginTop: "10%", textAlign: "center" }}>404</h1>
        ) : (
          <div className="content">
            {carts?.map((el) => (
              <div key={el.id} className="cards">
                <div className="card">
                  <img
                    src={el.images[0]}
                    alt={el.title}
                    className="cart-item-image"
                  />
                </div>

                <div className="card cont">
                  <h1>{el.title}</h1>
                  <p>{(el.price * 12730 * el.quantity).brm()} UZS</p>
                  <div className="counter">
                    <button
                      className="dec"
                      onClick={() => decrementCart(el)}
                      disabled={el.quantity === 1}
                    >
                      -
                    </button>
                    <span>{el.quantity}</span>
                    <button
                      className="inc"
                      disabled={el.quantity === 10}
                      onClick={() => addToCart(el)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(el.id)}
                    className="delete"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Shop;
