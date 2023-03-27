import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function CheckoutSuccess() {
  return (
    <div className="text-center m-5">
      <h2>Products Ordered successfully</h2>
      <Link to="/">
        <Button variant="custom">Return to Homepage</Button>
      </Link>
    </div>
  );
}

export default CheckoutSuccess;
