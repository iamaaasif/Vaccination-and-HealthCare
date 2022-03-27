import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";
const NavBar = ({ isAuthenticated, setIsAuthenticated }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [login, setLogin] = useState(true);
  const [logout, setLogout] = useState(false);
  const [height, setHeight] = useState(false);
  const [link, setLink] = useState("");
  // const [Authenticated, setAuthenticated] = useState(
  //   localStorage.getItem("token") ? true : false
  // );

  // let history = useHistory();
  useEffect(() => {
    if (isAuthenticated) {
      setLogin(false);
      setLogout(true);
    } else {
      setLogin(true);
      setLogout(false);
    }
    // const link = window.location.pathname;
    // const arry = link.split("/");
    // const length = arry.length;
    // setLink("/" + arry[length - 1]);
  }, [isAuthenticated]);

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
                <Button
                  className="link-last"
                  to="/login"
                  onClick={() => {
                    setLogout(true);
                    setLogin(false);
                    window.location.href = "http://localhost:3000/login";
                  }}
                >
                  Log In
                </Button>
              </>
            )}
            {logout && (
              <>
                <Button
                  className="link-last"
                  onClick={() => {
                    localStorage.removeItem("token");
                    setIsAuthenticated(false);
                    alert("Log Out Successfully");
                    setLogin(true);
                    setLogout(false);
                    window.location.href = "http://localhost:3000/";
                  }}
                >
                  Log Out
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
