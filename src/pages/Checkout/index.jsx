import React from "react";
import { Link } from "react-router-dom";
import CartCard from "../../components/CartCard";
import useCart from "../../hooks/useCart";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function Checkout() {
  const { cart, fullCart, clearCart } = useCart();

  if (cart.length < 1) return <h1 className="text-center my-3">Cart is empty</h1>;

  var totalCost = 0;
  fullCart.forEach((product) => {
    totalCost = totalCost + product.discountedPrice * product.quantity;
  });

  var fullPrice = 0;
  fullCart.forEach((product) => {
    fullPrice = fullPrice + product.price * product.quantity;
  });

  var totalSavings = fullPrice - totalCost;
  return (
    <Container className="justify-content-center w-75">
      <h1 className="text-center my-3">Checkout</h1>
      <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-4 my-4">
        {fullCart.map((product) => (
          <Col key={product.id}>
            <CartCard product={product} />
          </Col>
        ))}
        <Col>
          <p>Total Products: {cart.length}</p>
          {totalSavings > 0 ? (
            <p>Total Cost: {<span className="text-decoration-line-through">{fullPrice.toFixed(2)}</span>} NOK</p>
          ) : (
            ""
          )}
          <p>To Pay: {totalCost.toFixed(2)} NOK</p>
          {totalSavings > 0 ? <p>You saved {totalSavings.toFixed(2)} NOK!</p> : ""}
          <Link to="/checkout_success">
            <Button variant="custom" onClick={() => clearCart()}>
              Checkout Now
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Checkout;
