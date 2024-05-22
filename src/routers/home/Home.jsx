import React from "react";
import Product from "../../components/prodcut/Prodouct";
// import useStore from "../../context/store";
import { useFetch } from "../../hooks/useFetch";

const Home = () => {
  return (
    <div className="container">
      {/* <h1>Home</h1> */}
      <Product />
    </div>
  );
};

export default Home;
