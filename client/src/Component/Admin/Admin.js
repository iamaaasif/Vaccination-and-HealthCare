import React from "react";
import "./Admin.css";
import { Container, Button, Card } from "react-bootstrap";
import erfan from "../Photos/ErfanFormal.jpg";

function Admin() {
  return (
    <div className="body">
      <div className="box-div">
        <Container className="top-title">
          <div>
            <h2>Welcome To Admin Panel</h2>
            <h5>Total User 5</h5>
          </div>
          <div>
            <Button variant="outline-secondary">Log Out</Button>
          </div>
        </Container>
      </div>
      <section className="All-user-section">
        <Container>
          <h2 className="section-title">All User Information</h2>
          <div className="All-user-container">
            <Card
              className="single-user-card"
              style={{ width: "18rem", marginTop: "15px" }}
            >
              <Card.Img variant="top" src={erfan} style={{ height: "300px" }} />
              <Card.Body>
                <Card.Title>Md Erfan</Card.Title>
                <Card.Text className="card-text">
                  <p>Email : erfan@gmail.com</p>
                  <p>Phone : 018928374746</p>
                  <p>Password : 8374748</p>
                </Card.Text>
                <Button variant="primary" size="small">
                  Edit Detailse
                </Button>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </section>
      <section className="registered-baby-vaccine">
        <Container>
          <h2 className="section-title">Registerd Baby Vaccine Service</h2>
          <div className="All-baby-container">
            <Card
              className="single-baby-card"
              border="secondary"
              style={{ width: "18rem" }}
            >
              <Card.Header>Gardian Name</Card.Header>
              <Card.Body>
                <Card.Title>Baby Name</Card.Title>
                <Card.Text>
                  <p>Birth ID : 9377483927</p>
                  <p>Birth Date : 12/04/2384</p>
                  <p>Gender : Male</p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="single-baby-card"
              border="secondary"
              style={{ width: "18rem" }}
            >
              <Card.Header>Gardian Name</Card.Header>
              <Card.Body>
                <Card.Title>Baby Name</Card.Title>
                <Card.Text>
                  <p>Birth ID : 9377483927</p>
                  <p>Birth Date : 12/04/2384</p>
                  <p>Gender : Male</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </section>
      <section className="registered-women-vaccine">
        <Container>
          <h2 className="section-title">
            Registerd Pregnent Women Vaccine Service
          </h2>
          <div className="All-women-container">
            <Card
              className="single-women-card"
              border="secondary"
              style={{ width: "18rem" }}
            >
              <Card.Header>Gardian Name</Card.Header>
              <Card.Body>
                <Card.Title>Women Name</Card.Title>
                <Card.Text>
                  <p>Birth ID : 9377483927</p>
                  <p>Birth Date : 12/04/2384</p>
                  <p>Gender : Male</p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="single-baby-card"
              border="secondary"
              style={{ width: "18rem" }}
            >
              <Card.Header>Gardian Name</Card.Header>
              <Card.Body>
                <Card.Title>Baby Name</Card.Title>
                <Card.Text>
                  <p>Birth ID : 9377483927</p>
                  <p>Birth Date : 12/04/2384</p>
                  <p>Gender : Male</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Admin;
