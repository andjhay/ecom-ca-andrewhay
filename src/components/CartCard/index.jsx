import React from "react";
import useCart from "../../hooks/useCart";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CartCard({ product }) {
  let discountPercentage = Math.round(100 - (product.discountedPrice / product.price) * 100);
  let savings = (product.price - product.discountedPrice) * product.quantity;
  const { addToCartOnClick, removeFromCartOnClick } = useCart();
  return (
    <Card className="shadow h-100">
      <Card.Img style={{ objectFit: "cover", height: "200px" }} variant="top" src={product.imageUrl} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.price === product.discountedPrice ? (
            <b>
              <span>Price</span> <br />
              <span>{product.price} NOK</span>
            </b>
          ) : (
            <b>
              <span>SALE - {discountPercentage}%</span> <br />
              <span className="text-decoration-line-through">{product.price} NOK</span> <br />
              <span>{product.discountedPrice} NOK</span>
            </b>
          )}
        </Card.Text>
        <Card.Text className="mt-auto">
          Quantity in Cart: {product.quantity} <br />
          {savings === 0 ? (
            ""
          ) : (
            <>
              Saved: {savings.toFixed(2)} NOK <br />
            </>
          )}
          Total: {(product.quantity * product.discountedPrice).toFixed(2)}
          NOK
        </Card.Text>

        <Card.Text className="text-center">
          <Button variant="custom" className="m-1 w-25" onClick={() => removeFromCartOnClick(product.id)}>
            -
          </Button>
          <Button variant="custom" className="m-1 w-25" onClick={() => addToCartOnClick(product.id)}>
            +
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CartCard;
