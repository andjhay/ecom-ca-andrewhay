import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import useCart from "../../hooks/useCart";

function ProductCard({ data }) {
  const { title, imageUrl, description, price, discountedPrice, rating, id } = data;
  const { addToCartOnClick } = useCart();
  const productPage = "/product/" + id;
  let discountPercentage = Math.round(100 - (discountedPrice / price) * 100);
  return (
    <Card className="shadow h-100">
      <Link to={productPage}>
        <Card.Img style={{ objectFit: "cover", height: "200px" }} variant="top" src={imageUrl} />
      </Link>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text className="text-center">Average Rating - {rating}/5</Card.Text>
        <Card.Title className="text-center">Price</Card.Title>
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
