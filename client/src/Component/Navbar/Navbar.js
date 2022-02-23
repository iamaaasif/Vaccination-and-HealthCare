import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./Navbar.css";
const NavBar = ({ isAuthenticated, setIsAuthenticated }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [login, setLogin] = useState(true);
  const [logout, setLogout] = useState(false);
  const [Authenticated, setAuthenticated] = useState(
    localStorage.getItem("token") ? true : false
  );
  useEffect(() => {
    if (Authenticated) {
      setLogin(false);
      setLogout(true);
    } else {
      setLogin(true);
      setLogout(false);
    }
  }, []);

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
            {login && (
              <>
                <Link
                  className="link-last"
                  to="/login"
                  onClick={() => {
                    setLogout(true);
                    setLogin(false);
                  }}
                >
                  Log In
                </Link>
              </>
            )}
            {logout && (
              <>
                <Link
                  className="link-last"
                  to="/"
                  onClick={() => {
                    localStorage.removeItem("token");
                    setIsAuthenticated(false);
                    alert("Log Out Successfully");
                    setLogin(true);
                    setLogout(false);
                  }}
                >
                  Log Out
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
