import React from "react";
import Card from "react-bootstrap/Card";

function ReviewCard({ review }) {
  return (
    <Card className="my-2">
      <Card.Body>
        <Card.Title>
          {review.username} - {review.rating}/5
        </Card.Title>
        <Card.Text>{review.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ReviewCard;
