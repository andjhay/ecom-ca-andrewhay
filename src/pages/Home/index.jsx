import React from "react";
import ProductsList from "../../components/ProductsList";
import Search from "../../components/Search";

function Home({ data, dataFiltered, searchInput, onSearchInputChange }) {
  return (
    <>
      <Search searchInput={searchInput} onSearchInputChange={onSearchInputChange} dataFiltered={dataFiltered} />
      <h1 className="text-center mt-3">Products</h1>
      <ProductsList data={data} />
    </>
  );
}

export default Home;
