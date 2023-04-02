import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import useCart from "../../hooks/useCart";

function ProductCard({ data }) {
  const { title, imageUrl, description, price, discountedPrice, rating, id } = data;
  const { fullCart, addToCartOnClick } = useCart();
  const productPage = "/product/" + id;
  let productQuantity = 0;
  fullCart?.forEach((product) => {
    if (product.id === id) productQuantity = product.quantity;
  });
  let discountPercentage = Math.round(100 - (discountedPrice / price) * 100);
  return (
    <Card className="shadow h-100">
      <Link to={productPage}>
        <Card.Img id="card-img" variant="top" src={imageUrl} />
      </Link>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text className="text-center">Average Rating - {rating}/5</Card.Text>
        <Card.Title className="mt-auto text-center">Price</Card.Title>
        <Card.Text className="text-center">
          {price === discountedPrice ? (
            <b>
              <span>{discountedPrice} NOK</span>
            </b>
          ) : (
            <b>
              <span>SALE - {discountPercentage}%</span> <br />
              <span className="text-decoration-line-through">{price} NOK</span> <br />
              <span>{discountedPrice} NOK</span>
            </b>
          )}
        </Card.Text>
        <Card.Text className="text-center">{"In Cart: " + productQuantity}</Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-center">
        <Link to={productPage}>
          <Button variant="custom" className="m-2">
            View Product
          </Button>
        </Link>
        <Button variant="custom" className="m-2" onClick={() => addToCartOnClick(id)}>
          Add to Cart
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default ProductCard;
