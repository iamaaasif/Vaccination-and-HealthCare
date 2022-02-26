import React from "react";
import "./Admin.css";
import { Container, Button, Card } from "react-bootstrap";
import erfan from "../Photos/ErfanFormal.jpg";
import { useState, useEffect } from "react";
import axios from "axios";

function Admin() {
  const [users, setUser] = useState([]);
  const [baby, setbaby] = useState([]);
  const [womens, setwomens] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("/api/users", {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((data) => {
        setUser(data.data);
        // console.log(data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    axios
      .get("/api/baby", {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((data) => {
        setbaby(data.data);
        // console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("/api/women", {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((data) => {
        setwomens(data.data);
        console.log(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="body" style={{ background: "#eeeeee" }}>
      <div className="box-div">
        <Container className="top-title">
          <div>
            <h2>Welcome To Admin Panel</h2>
            <h5>Total User {users.length}</h5>
          </div>
          <div>
            {/* <Button variant="outline-secondary">Log Out</Button> */}
          </div>
        </Container>
      </div>
      <section className="All-user-section">
        <Container>
          <h2 className="section-title">All User Information</h2>
          <div className="All-user-container">
            {users.map((user, index) => {
              return (
                <Card
                  className="single-user-card"
                  style={{ width: "18rem", marginTop: "15px" }}
                >
                  {/* <Card.Img
                    variant="top"
                    src={erfan}
                    style={{ height: "300px" }}
                  /> */}
                  <Card.Body>
                    <Card.Title>{user.username}</Card.Title>
                    <Card.Text className="card-text">
                      <p>Email : {user.email}</p>
                      <p>Phone : {user.phone}</p>
                      {/* <p>Password : {user.password}</p> */}
                    </Card.Text>
                    <Button variant="primary" size="small">
                      Edit Detailse
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>
      <section className="registered-baby-vaccine">
        <Container>
          <h2 className="section-title">Registerd Baby Vaccine Service</h2>
          <div className="All-baby-container">
            {baby.map((b, index) => {
              return (
                <Card
                  className="single-baby-card"
                  border="secondary"
                  style={{ width: "18rem" }}
                >
                  <Card.Header>{b.guardian_name}</Card.Header>
                  <Card.Body>
                    <Card.Title>{b.name}</Card.Title>
                    <Card.Text>
                      <p>Birth ID : {b.birthID}</p>
                      <p>Birth Date : {b.birthDate}</p>
                      <p>Gender : {b.gender}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>
      <section className="registered-women-vaccine">
        <Container>
          <h2 className="section-title">
            Registerd Pregnent Women Vaccine Service
          </h2>
          <div className="All-women-container">
            {womens.map((w, index) => {
              return (
                <Card
                  className="single-women-card"
                  border="secondary"
                  style={{ width: "18rem" }}
                >
                  <Card.Header>{w.guardian_name}</Card.Header>
                  <Card.Body>
                    <Card.Title>{w.name}</Card.Title>
                    <Card.Text>
                      <p>National ID : {w.nationalID}</p>
                      <p>Month of Pregnency : {w.monthOfPregnency}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Admin;
