import axios from "../../api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import useStore from "../../context/wishlist";
import useCartStore from "../../context/cartSlice";

const SingleRoute = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const add = useCartStore((s) => s.addToCart);
  const heart = useStore((s) => s.toggleWishlistItem);
  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((res) => console.log(res));
  }, [id]);

  if (!product) {
    return <h2 className="container">Loading...</h2>;
  }

  return (
    <section className="single">
      <div className="container">
        <div className="content">
          <div className="cardd">
            <img src={product?.images[0]} alt="img" />
          </div>
          <div className="cardd">
            <h2>{product?.title}</h2>
            <p>{product?.description}</p>
            <b>{(product?.price * 12730).brm()} UZS</b>
            <div className="btns">
              <button className="addCart" onClick={() => add(product)}>
                Add to Cart
              </button>
              <button className="like" onClick={() => heart(product)}>
                <FaRegHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleRoute;
