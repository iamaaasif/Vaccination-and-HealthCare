import React from "react";
import "./Wvaccine.css";
import { Container, Form, Button } from "react-bootstrap";

function Wvaccine() {
  return (
    <>
      {" "}
      <Container>
        <div
          style={{ marginTop: "30px", marginBottom: "30px" }}
          className="formBox"
        >
          <h2
            style={{
              textAlign: "center",
              color: "#0d6efd",
              fontFamily: "Helvetica",
            }}
          >
            Pregnent Women Vaccine Registration
          </h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>National ID</Form.Label>
              <Form.Control type="number" placeholder="NID Number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Month of Pregnency</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter month of pregnency"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="All the given information is Correct...!"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default Wvaccine;
