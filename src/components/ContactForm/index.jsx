import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ContactForm() {
  const submitForm = (event) => {
    event.preventDefault();
    const form = [...event.target];
    let formData = [];
    form.forEach((target) => {
      if (target.id) {
        let key = target.id;
        let value = target.value;
        let formEntry = {};
        formEntry[key] = value;
        target.value = "";
        formData.push(formEntry);
      }
    });
    console.log(formData);
    alert("Contact Form Submitted");
  };

  return (
    <Container>
      <Form onSubmit={submitForm}>
        <Form.Group className="mb-3" controlId="Full Name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control required minLength={3} type="name" placeholder="John Doe (required)" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control required minLength={3} type="text" placeholder="(required)" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" placeholder="name@example.com (required)" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Message">
          <Form.Label>Message</Form.Label>
          <Form.Control required minLength={3} as="textarea" placeholder="(required)" rows={3} />
        </Form.Group>
        <Button variant="custom" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default ContactForm;
