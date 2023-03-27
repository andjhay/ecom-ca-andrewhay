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
  const { data } = useApi(productUrl);
  const { addToCartOnClick } = useCart();
  const { title, imageUrl, description, price, discountedPrice, rating, reviews } = data;
  let discountPercentage = Math.round(100 - (discountedPrice / price) * 100);

  return (
    <Container>
      <h1 className="text-center m-4">{title}</h1>
      <Row xs={1} sm={2} className="g-4">
        <Col>
          <Container>
            <img className="img-fluid" src={imageUrl} alt={description} />
          </Container>
        </Col>
        <Col>
          <Container className="my-2">
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
            <Button onClick={() => addToCartOnClick(id)}>Add to Cart</Button>
          </Container>
          <Container className="my-2">
            <h4>Reviews - Average Rating: {rating} </h4>
            {reviews?.map((review) => (
              <ReviewCard review={review} key={review.id} />
            ))}
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Product;
