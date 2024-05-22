import React from "react";
import Home from "./routers/home/Home";
import SingleRoute from "./routers/singleRoute/SingleRoute";
import Header from "./components/header/Header";
import "./scss/main.scss";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleRoute />} />
        <Route path="*" element={<h1 className="container">404</h1>} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
