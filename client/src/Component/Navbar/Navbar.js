import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./Navbar.css";
const NavBar = ({ isAuthenticated, setIsAuthenticated }) => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="link" to="/">
              Home
            </Link>
            {isAuthenticated && (
              <>
                <Link className="link" to="/Bvaccine">
                  Baby Vaccine
                </Link>
                <Link className="link" to="/Wvaccine">
                  Pregnent Women Vaccine
                </Link>
              </>
            )}

            <Link className="link" to="/Hospital">
              Near by Hospital
            </Link>
            <Link className="link" to="/Htips">
              Health tips
            </Link>
          </Nav>
          <Nav>
            <Link className="link-last" to="/login">
              Log In
            </Link>
            <Link
              className="link-last"
              to="/"
              onClick={() => {
                localStorage.removeItem("token");
                setIsAuthenticated(false);
                alert("Log Out Successfully");
              }}
            >
              Log Out
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
