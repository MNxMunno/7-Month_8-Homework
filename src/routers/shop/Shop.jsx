import React from "react";
// import "./Karzinka.css";
import useCartStore from "../../context/cartSlice";
// import useCartStore from "../../components/context/bears";

const Shop = () => {
  const { cart, removeFromCart, decrementCart, addToCart } = useCartStore();

  return (
    <div className="karzenka container">
      {cart.length === 0 ? (
        <p style={{ marginTop: "10%", textAlign: "center", fontSize: "60px" }}>
          404
        </p>
      ) : (
        <div className="cart-items">
          {cart?.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-details">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="cart-item-image"
                />
              </div>

              <div className="cart-item-details">
                <h2>{item.title}</h2>
                <p>{item.price} UZS</p>
                <div className="cart-item-quantity">
                  <button
                    onClick={() => decrementCart(item)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-item"
                >
                  Удалить
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
