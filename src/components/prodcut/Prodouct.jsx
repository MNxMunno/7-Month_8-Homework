import React from "react";
import Cart from "../../static/cart/Cart";
import { useFetch } from "../../hooks/useFetch";

const Prodouct = () => {
  let url = "/products";
  const { data, loading } = useFetch(url);
  // console.log(data);
  return (
    <div>
      <Cart data={data} loading={loading} />
    </div>
  );
};

export default Prodouct;
