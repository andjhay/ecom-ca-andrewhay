import React from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { url } from "../../shared/url";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import useCart from "../../hooks/useCart";
import ReviewCard from "../../components/ReviewCard";

function Product() {
  let { id } = useParams();
  const productUrl = url + "/" + id;
  const { data, isLoading, isError } = useApi(productUrl);
  const { fullCart, addToCartOnClick } = useCart();
  const { title, imageUrl, description, price, discountedPrice, rating, reviews } = data;
  let discountPercentage = Math.round(100 - (discountedPrice / price) * 100);
  let productQuantity = 0;
  fullCart?.forEach((product) => {
    if (product.id === id) productQuantity = product.quantity;
  });
  if (isLoading) {
    return <h1 className="text-center my-3">Loading Products</h1>;
  }

  if (isError) {
    return <h1 className="text-center my-3">Error Loading Products Contact Admin</h1>;
  }

  return (
    <Container>
      <h1 className="text-center m-4">{title}</h1>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Container className="d-flex justify-content-center">
            <img id="product-img" className="img-fluid shadow rounded" src={imageUrl} alt={description} />
          </Container>
        </Col>
        <Col>
          <Container className="my-5">
            <p>{description}</p>
            <p>
              {price === discountedPrice ? (
                <span>
                  <b>{price} NOK</b>
                </span>
              ) : (
                <b>
                  <span>SALE - {discountPercentage}%</span> <br />
                  <span className="text-decoration-line-through">{price} NOK</span> <br />
                  <span>{discountedPrice} NOK</span>
                </b>
              )}
            </p>
            <p>{"In Cart: " + productQuantity}</p>
            <Button variant="custom" onClick={() => addToCartOnClick(id)}>
              Add to Cart
            </Button>
          </Container>
          <Container className="my-2">
            <h4>Reviews - Average Rating: {rating} </h4>
            {reviews?.length > 0 ? (
              reviews.map((review) => <ReviewCard review={review} key={review.id} />)
            ) : (
              <p>No reviews yet</p>
            )}
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Product;
