import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import CartLink from "../CartLink";
import { LinkContainer } from "react-router-bootstrap";

function TopNav() {
  return (
    <Navbar bg="nav">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>E-commerce</Navbar.Brand>
        </LinkContainer>
        <Nav className="w-100 align-items-center justify-content-center flex-row">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <CartLink />
        </Nav>
      </Container>
    </Navbar>
  );
}

export default TopNav;
