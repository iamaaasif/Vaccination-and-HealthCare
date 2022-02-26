import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import { GoogleLogin } from "react-google-login";
import "./Wvaccine.css";

function Wvaccine() {
  const [hasToken, setHasToken] = useState(false);
  const [showtable, setShowtable] = useState(false);
  const [womenReg, setWomenReg] = useState({
    name: "",
    nationalID: "",
    monthOfPregnency: 0,
  });
  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("/api/event/token/refresh", {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setHasToken(true);
        } else {
          setHasToken(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const responseGoogle = (response) => {
    const token = localStorage.getItem("token");
    const { code } = response;
    axios
      .post(
        "/api/event/token/create",
        { code },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const errorGoogle = (error) => {
    console.log(error);
  };

  const handelInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setWomenReg({ ...womenReg, [name]: value });
    // console.log(womenReg);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowtable(true);
    const token = localStorage.getItem("token");

    axios
      .post("/api/women", womenReg, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        alert("Succefully Added!");
        setWomenReg({
          name: "",
          nationalID: "",
          monthOfPregnency: 0,
        });
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
          {!hasToken ? (
            <GoogleLogin
              clientId="296997425060-tv4bnocreosptgp2fn01ttk2r54o332f.apps.googleusercontent.com"
              buttonText="Authorize Google Calender"
              onSuccess={responseGoogle}
              onFailure={errorGoogle}
              cookiePolicy="single_host_origin"
              responseType="code"
              accessType="offline"
              scope="openid email profile https://www.googleapis.com/auth/calendar"
            ></GoogleLogin>
          ) : (
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
          )}
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
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1 - TT Vaccine</td>
                    <td>17/02/22</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>2 - MR Vaccine</td>
                    <td>28/03/22</td>
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

export default Wvaccine;
