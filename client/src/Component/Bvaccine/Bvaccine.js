import React from "react";
import "./Bvaccine.css";
import { Container, Form, Button, Table } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

function Bvaccine() {
  const [showtable, setShowtable] = useState(false);
  const [babyReg, setBabyReg] = useState({
    name: "",
    gender: "",
    birthID: "",
    birthDate: "",
  });

  const handelInputn = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "name") {
      setBabyReg((prev) => {
        return {
          name: value,
          gender: prev.gender,
          birthID: prev.birthID,
          birthDate: prev.birthDate,
        };
      });
    } else if (name === "gender") {
      setBabyReg((prev) => {
        return {
          name: prev.name,
          gender: value,
          birthID: prev.birthID,
          birthDate: prev.birthDate,
        };
      });
    } else if (name === "birthID") {
      setBabyReg((prev) => {
        return {
          name: prev.name,
          gender: prev.gender,
          birthID: value,
          birthDate: prev.birthDate,
        };
      });
    } else if (name === "birthDate") {
      setBabyReg((prev) => {
        return {
          name: prev.name,
          gender: prev.gender,
          birthID: prev.birthID,
          birthDate: value,
        };
      });
    }
    // console.log(babyReg);
  };

  return (
    <>
      <Container>
        <div
          style={{ marginTop: "30px", marginBottom: "50px" }}
          className="formBox"
        >
          <h2
            style={{
              textAlign: "center",
              color: "#0d6efd",
              fontFamily: "Helvetica",
            }}
          >
            Baby Vaccine Registration
          </h2>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              setShowtable(true);
              // console.log(babyReg);
              axios
                .post("/api/baby", babyReg)
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Baby Name</Form.Label>
              <Form.Control
                onChange={handelInputn}
                type="text"
                name="name"
                value={babyReg.name}
                placeholder="Enter Baby Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                onChange={handelInputn}
                type="text"
                name="gender"
                value={babyReg.gender}
                placeholder="Enter Gender"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicmail">
              <Form.Label>Birth Cirtificate Number</Form.Label>
              <Form.Control
                onChange={handelInputn}
                type="number"
                name="birthID"
                value={babyReg.birthID}
                placeholder="Enter Birth cirtificate number"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Birth Date</Form.Label>
              <Form.Control
                onChange={handelInputn}
                type="date"
                name="birthDate"
                value={babyReg.birthDate}
                placeholder="Birth Date"
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
        {showtable && (
          <>
            <div style={{ marginBottom: "30px" }}>
              <h2 style={{ marginBottom: "20px" }}>Expected Vaccine date</h2>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Vaccine Name</th>
                    <th>1st Dose</th>
                    <th>2nd Dose</th>
                    <th>3rd Dose</th>
                    <th>4th Dose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1 - BCG Vaccine</td>
                    <td>17/02/22</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>2 - Pentavalent Vaccine</td>
                    <td>28/03/22</td>
                    <td>26/04/22</td>
                    <td>24/05/22</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>3 - Pneumococcal Vaccine</td>
                    <td>28/03/22</td>
                    <td>26/04/22</td>
                    <td>24/05/22</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>4 - Oral Polio Vaccine</td>
                    <td>28/03/22</td>
                    <td>26/04/22</td>
                    <td>24/05/22</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>5 - Rota Virus Vaccine</td>
                    <td>28/03/22</td>
                    <td>26/04/22</td>
                    <td>24/05/22</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>6 - Measles Rubella Vaccine</td>
                    <td>16/11/22</td>
                    <td>16/05/23</td>
                    <td>N/A</td>
                    <td>N/A</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </>
        )}
      </Container>
    </>
  );
}

export default Bvaccine;
