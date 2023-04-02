import React, { useState } from "react";
import useApi from "../../hooks/useApi";
import { url } from "../../shared/url";
import ProductsList from "../../components/ProductsList";
import Search from "../../components/Search";

function Home() {
  const { data, isLoading, isError } = useApi(url);
  const [searchInput, setSearchInput] = useState();
  const [filteredProducts, setFilteredProducts] = useState(data);

  // Takes search input and returns up to 5 results that best match
  function onSearchInputChange(searchValue) {
    setSearchInput(searchValue);
    const results = data.filter((product) => {
      console.log(product.tags.join());
      if (
        product.title.toLowerCase().includes(searchValue.toLowerCase()) === true ||
        product.description.toLowerCase().includes(searchValue.toLowerCase()) === true ||
        product.tags.join().toLowerCase().includes(searchValue.toLowerCase()) === true
      ) {
        return true;
      } else {
        return false;
      }
    });
    setFilteredProducts(results.slice(0, 5));
  }

  if (isLoading) {
    return <h1 className="text-center my-3">Loading Products</h1>;
  }

  if (isError) {
    return <h1 className="text-center my-3">Error Loading Products Contact Admin</h1>;
  }

  return (
    <>
      <Search searchInput={searchInput} onSearchInputChange={onSearchInputChange} dataFiltered={filteredProducts} />
      <h1 className="text-center mt-3">Products</h1>
      <ProductsList data={data} />
    </>
  );
}

export default Home;
