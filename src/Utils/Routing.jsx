import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Support from "../pages/Support";
import Carts from "../pages/Carts";
import ProductDetails from "../pages/ProductDetails";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/support" element={<Support />} />
      <Route path="/cart" element={<Carts />} />
    </Routes>
  );
}

export default Routing;
