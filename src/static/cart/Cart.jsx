import React, { memo } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";
// import useCartStore from "../../context/cartSlice";

const Cart = ({ data, loading }) => {
  const cart = data?.map((el) => (
    <Link to={`/product/${el.id}`} className="card" key={el.id}>
      <img src={el.images[0]} alt={el.title} />
      <div className="content">
        <h2>{el.title}</h2>
        <p title={el.description}>{el.description}</p>
        <b> {(el.price * 12730)?.brm()} UZS</b>
      </div>
    </Link>
  ));

  return (
    <>
      {loading ? (
        <h1 style={{ fontFamily: "sans-serif", paddingTop: "80px" }}>
          Loading...
        </h1>
      ) : (
        <></>
      )}
      <div className="pro_cards">{cart}</div>
    </>
  );
};

export default memo(Cart);
