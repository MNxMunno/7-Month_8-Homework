import React from "react";
import Product from "../../components/prodcut/Prodouct";
// import useStore from "../../context/store";
import { useFetch } from "../../hooks/useFetch";
import Banner from "../../static/banner/Banner";

const Home = () => {
  return (
    <div className="container">
      <Banner />
      <Product />
    </div>
  );
};

export default Home;
