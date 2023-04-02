import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import CartLink from "../CartLink";
import Logo from "../../assets/ecommercelogo.png";

function TopNav() {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  const handleCollapse = () => {
    setCollapsed(false);
  };

  return (
    <Navbar bg="nav" expand="sm" expanded={collapsed}>
      <Container>
        <NavLink to="/" onClick={handleCollapse}>
          <Navbar.Brand>
            <img src={Logo} alt="site logo" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="w-100 align-items-center">
            <Nav.Item onClick={handleCollapse}>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </Nav.Item>
            <Nav.Item onClick={handleCollapse}>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </Nav.Item>
            <Nav.Item className=" ms-sm-auto" onClick={handleCollapse}>
              <CartLink />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;
