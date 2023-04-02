import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import CartLink from "../CartLink";
import Logo from "../../assets/ecommercelogo.png";

function TopNav() {
  return (
    <Navbar bg="nav" expand="sm">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={Logo} alt="site logo" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 align-items-center">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
            <CartLink />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;
