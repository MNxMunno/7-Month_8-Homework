import React from "react";
import useStore from "../../context/wishlist";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { bear } = useStore();
  const heart = useStore((s) => s.toggleWishlistItem);
  const card = bear.map((el) => (
    <div className="cards" key={el.id}>
      <Link to={"/shop"} className="card">
        <img src={el.images[0]} alt={el.title} />
      </Link>
      <div className="card cart">
        <h2 title={el.title}>{el.title}</h2>
        <p>{(el.price * 12730).brm()} UZS</p>
        <button onClick={() => heart(el)}>Remove</button>
      </div>
    </div>
  ));

  return (
    <section className="wishlist">
      <div className="container">
        {bear.length === 0 ? (
          <h1 style={{ textAlign: "center" }}>404</h1>
        ) : (
          <div className="content">{card}</div>
        )}
      </div>
    </section>
  );
};

export default Wishlist;
