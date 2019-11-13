import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import brand from "../assets/Zero.png";
import "../App.css";

const Navigation = () => {
  return (
    <Navbar className="navbar" expand="lg">
      <Navbar.Brand href="#home">
        <img className="zero" src={brand} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="navlink" href="#home" style={{color: "blue"}}>About</Nav.Link>
          <Nav.Link className="navlink" href="#link" style={{color: "blue"}}>FAQs</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
