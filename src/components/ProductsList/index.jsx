import React from "react";
import ProductCard from "../ProductCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ProductsList({ data }) {
  return (
    <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4 m-4">
      {data?.map((product) => (
        <Col key={product.id}>
          <ProductCard data={product} />
        </Col>
      ))}
    </Row>
  );
}

export default ProductsList;
