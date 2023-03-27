import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

function SearchDropdown({ searchInput, dataFiltered }) {
  const productPage = "/product/";
  if (searchInput)
    return (
      <ListGroup style={{ zIndex: "1" }} className="position-absolute">
        {dataFiltered !== "" ? (
          dataFiltered.map((product) => (
            <ListGroup.Item key={product.id}>
              <Link to={productPage + product.id}>{product.title}</Link>
            </ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item>No Products match the search</ListGroup.Item>
        )}
      </ListGroup>
    );
}

export default SearchDropdown;
