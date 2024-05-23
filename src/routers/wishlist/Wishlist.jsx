import React from "react";
// import useStore from "../../components/context/store";
import { IoMdHeart } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
// import "./Wishlist.css";
import useStore from "../../context/wishlist";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { bears } = useStore();
  const heart = useStore((s) => s.toggleWishlistItem);
  const card = bears.map((el) => (
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
        {bears.length === 0 ? (
          <h1>404</h1>
        ) : (
          <div className="content">{card}</div>
        )}
      </div>
    </section>
  );
};

export default Wishlist;
