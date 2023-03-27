import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function CheckoutSuccess() {
  return (
    <>
      <Container className="text-center m-5">
        <h2>Products Ordered successfully</h2>
        <Link to="/">
          <Button>Return to Homepage</Button>
        </Link>
      </Container>
    </>
  );
}

export default CheckoutSuccess;
