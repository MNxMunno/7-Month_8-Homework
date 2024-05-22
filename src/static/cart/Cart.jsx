import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const Cart = ({ data, loading }) => {
  const cart = data?.map((el) => (
    <Link to={`/product/${el.id}`} className="card" key={el.id}>
      <img src={el.images[0]} alt={el.title} />
      <div className="content">
        <h2>{el.title}</h2>
        <p title={el.description}>{el.description}</p>
        <b>$ {el.price}</b>
      </div>
    </Link>
  ));

  return (
    <>
      {loading ? "Loading..." : <></>}
      <div className="cards">{cart}</div>
    </>
  );
};

export default Cart;
