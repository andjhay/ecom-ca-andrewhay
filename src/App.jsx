import React, { useState } from "react";
import "./styles.css";
import "./styles.scss";
import { Routes, Route } from "react-router-dom";
import useApi from "./hooks/useApi";
import { url } from "./shared/url";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Product from "./pages/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import RouteNotFound from "./pages/RouteNotFound";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess";

function App() {
  const { data, isLoading, isError } = useApi(url);
  const [searchInput, setSearchInput] = useState();
  const [filteredProducts, setFilteredProducts] = useState(data);

  function onSearchInputChange(searchValue) {
    setSearchInput(searchValue);
    const results = data.filter((product) => {
      if (
        product.title.toLowerCase().includes(searchValue.toLowerCase()) === true ||
        product.description.toLowerCase().includes(searchValue.toLowerCase()) === true
      ) {
        return true;
      } else {
        return false;
      }
    });
    setFilteredProducts(results);
  }

  if (isLoading) {
    return <div>Loading posts</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout searchInput={searchInput} />}>
        <Route
          index
          element={
            <Home
              data={data}
              dataFiltered={filteredProducts}
              searchInput={searchInput}
              onSearchInputChange={onSearchInputChange}
            />
          }
        />
        <Route path="checkout" element={<Checkout data={data} />} />
        <Route path="checkout_success" element={<CheckoutSuccess />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="*" element={<RouteNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
