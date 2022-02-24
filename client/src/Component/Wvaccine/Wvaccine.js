import React from "react";
import "./Wvaccine.css";
import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";

function Wvaccine() {
  const [womenReg, setWomenReg] = useState({
    name: "",
    nationalID: "",
    monthOfPregnency: 0,
  });

  const handelInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setWomenReg({ ...womenReg, [name]: value });
    // console.log(womenReg);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    axios
      .post("/api/women", womenReg, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

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
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                onChange={handelInput}
                type="text"
                placeholder="Enter Name"
                value={womenReg.name}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>National ID</Form.Label>
              <Form.Control
                name="nationalID"
                onChange={handelInput}
                type="number"
                placeholder="NID Number"
                value={womenReg.nationalID}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Month of Pregnency</Form.Label>
              <Form.Control
                name="monthOfPregnency"
                onChange={handelInput}
                type="number"
                placeholder="Enter month of pregnency"
                value={womenReg.monthOfPregnency}
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
