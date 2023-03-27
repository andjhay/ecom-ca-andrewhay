import React from "react";
import { Link } from "react-router-dom";
import CartCard from "../../components/CartCard";
import useCart from "../../hooks/useCart";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function Checkout({ data }) {
  const { cart, clearCart } = useCart();

  let cartItemData = [];

  cart.forEach((cartItem) => {
    const product = data.find((product) => product.id === cartItem);
    const cartItemIndex = cartItemData.findIndex((item) => item.id === product.id);
    if (cartItemIndex !== -1) {
      cartItemData[cartItemIndex].quantity += 1;
    } else {
      cartItemData.push({ ...product, quantity: 1 });
    }
  });

  var totalCost = 0;

  cartItemData.forEach((product) => {
    totalCost = totalCost + product.discountedPrice * product.quantity;
  });

  if (cart.length < 1)
    return (
      <>
        <Container className="justify-content-center w-50 m-auto">
          <h1 className="text-center my-3">Cart is empty</h1>
        </Container>
      </>
    );

  return (
    <>
      <Container className="justify-content-center w-50 m-auto">
        <h1 className="text-center my-3">Checkout</h1>
        <Row sm={1} md={2} xl={3} className="g-4 my-4">
          {cartItemData.map((product) => (
            <Col key={product.id}>
              <CartCard product={product} />
            </Col>
          ))}
        </Row>
        <p>Total Products: {cart.length}</p>
        <p>Total Cost: {totalCost.toFixed(2)} NOK</p>
        <Link to="/checkout_success">
          <Button variant="custom" onClick={() => clearCart()}>Checkout Now</Button>
        </Link>
      </Container>
    </>
  );
}

export default Checkout;
