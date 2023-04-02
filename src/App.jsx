import React from "react";
import "./styles.css";
import "./styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Product from "./pages/Product";
import RouteNotFound from "./pages/RouteNotFound";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="checkout_success" element={<CheckoutSuccess />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="*" element={<RouteNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
