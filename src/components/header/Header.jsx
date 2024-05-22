import React, { useState } from "react";
import { GrCatalog } from "react-icons/gr";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdBorderAll, MdLogin } from "react-icons/md";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const Header = () => {
  const [shrink, setShrink] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  });

  const [search, setSearch] = useState("");
  const { data, loading } = useFetch(`/products/search?q=${search}`, search);

  const searchItems = data?.map((el) => (
    <Link
      onClick={() => setSearch("")}
      className="search_box"
      to={`/product/${el.id}`}
      key={el.id}
    >
      <img src={el.images[0]} alt="img" />
      <span>{el.title}</span>
    </Link>
  ));

  return (
    <header className={`navbar ${shrink ? "shrink" : ""}`}>
      <div className="container">
        <nav>
          <div className="logo">
            <Link to={"/"}>
              <svg
                viewBox="0 0 140 30"
                width={150}
                xmlns=""
                className="RedHeader_Logo__logo__eeslq"
              >
                <path d="m8.574 2.99-8.87 21.045h3.16l2.106-5.01h10.38l2.036 5.01h3.256L11.83 2.99H8.574ZM6.081 16.26l4.037-10.173L14.22 16.26H6.081ZM36.352 24.066h13.706v-2.733H39.3v-6.44h10.301V12.1H39.301V5.784h10.757V2.99H36.352v21.076ZM31.035.257h-.516a3.72 3.72 0 0 1-3.555 3.523v.515c1.975.091 3.433 1.61 3.555 3.584h.516a3.73 3.73 0 0 1 3.556-3.584V3.81A3.776 3.776 0 0 1 31.035.257ZM32.19 8.821h-2.856v15.215h2.856V8.821ZM25.23 2.99h-2.886v21.045h2.887V2.99ZM104.119 8.487c-4.613 0-7.84 3.401-7.84 7.986 0 4.677 3.374 8.048 7.961 8.048 2.645 0 4.894-1.033 6.261-2.977l-2.006-1.7a5.264 5.264 0 0 1-4.255 2.035c-2.612 0-4.74-1.823-5.046-4.313h12.307a6.64 6.64 0 0 0 .091-1.275c.003-4.373-3.097-7.804-7.473-7.804Zm-4.922 6.62c.303-2.43 2.218-4.008 4.922-4.008 2.493 0 4.255 1.585 4.559 4.008h-9.48ZM116.823 12.829c0-1.153 1.245-1.853 2.977-1.853 1.701 0 2.795.85 3.343 1.702l2.278-1.428c-.941-1.336-2.643-2.763-5.53-2.763-3.433 0-5.956 1.67-5.956 4.493 0 5.65 8.939 3.372 8.939 6.804 0 1.366-1.337 2.185-3.221 2.185-1.975 0-3.316-1.184-4.037-1.974l-2.197 1.67c.546.791 2.306 2.856 6.229 2.856 4.011 0 6.108-2.065 6.108-4.798 0-5.953-8.933-3.706-8.933-6.894ZM130.77 12.83c0-1.153 1.246-1.854 2.979-1.854 1.701 0 2.795.85 3.342 1.702l2.279-1.423c-.941-1.336-2.644-2.764-5.53-2.764-3.435 0-5.956 1.67-5.956 4.494 0 5.65 8.939 3.371 8.939 6.803 0 1.366-1.338 2.186-3.223 2.186-1.975 0-3.316-1.184-4.037-1.974l-2.188 1.67c.548.791 2.307 2.856 6.23 2.856 4.012 0 6.108-2.065 6.108-4.798-.008-5.958-8.943-3.71-8.943-6.899ZM76.709 8.487c-3.92 0-8.053 2.368-8.053 8.594v12.663h2.857v-7.531c1.215 1.428 3.16 2.278 5.288 2.278 4.614 0 7.687-3.645 7.687-7.988 0-4.403-2.795-8.016-7.78-8.016Zm-.084 13.392c-2.705 0-5.166-1.914-5.166-5.406 0-3.219 2.461-5.374 5.166-5.374 2.884 0 5.014 2.064 5.014 5.374-.007 3.25-2.13 5.406-5.014 5.406ZM89.898 10.976V8.851h-2.856v15.215h2.856V16.26c0-3.796 2.307-5.011 5.349-4.8v-2.7c-2.797-.153-4.529 1.03-5.35 2.215ZM67.562 8.821h-3.495l-4.345 5.436-4.285-5.436H51.73l6.198 7.652-6.26 7.593h3.404l4.529-5.558 4.527 5.558h3.495l-6.26-7.683 6.2-7.562Z"></path>
              </svg>
            </Link>
          </div>
          <Link to={"/catalog"} className="btn">
            <GrCatalog />
            <p className="nav__btn">Каталог</p>
          </Link>
          <div className="search">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
            />
            <button>Найти</button>
            {search?.trim() ? (
              <ul className="navbar__search-content">{searchItems}</ul>
            ) : (
              <></>
            )}
          </div>
          <div className="nav__items">
            <Link to={"/order"}>
              <MdBorderAll />
              <p className="nav__btn">Заказы</p>
            </Link>
            <Link to={"/cart"}>
              <HiOutlineShoppingCart />
              <p className="nav__btn">Корзина</p>
            </Link>
            <Link to={"/login"}>
              <MdLogin />
              <p className="nav__btn">Войти</p>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
