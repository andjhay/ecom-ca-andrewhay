import React from "react";
import ProductCard from "../ProductCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ProductsList({ data }) {
  return (
    <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-4 m-4">
      {data?.map((product) => (
        <Col key={product.id}>
          <ProductCard data={product} />
        </Col>
      ))}
    </Row>
  );
}

export default ProductsList;
