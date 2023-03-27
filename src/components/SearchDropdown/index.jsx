import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

function SearchDropdown({ searchInput, dataFiltered }) {
  const productPage = "/product/";
  if (searchInput)
    return (
      <ListGroup id="dropdown-search" className="position-absolute bg-secondary">
        {dataFiltered.length > 0 ? (
          dataFiltered.map((product) => (
            <Link className="text-black" to={productPage + product.id}>
              <ListGroup.Item key={product.id}>{product.title}</ListGroup.Item>
            </Link>
          ))
        ) : (
          <ListGroup.Item>No Products match the search</ListGroup.Item>
        )}
      </ListGroup>
    );
}

export default SearchDropdown;
