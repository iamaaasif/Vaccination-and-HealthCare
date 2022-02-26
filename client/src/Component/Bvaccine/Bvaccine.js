import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import { GoogleLogin } from "react-google-login";
import "./Bvaccine.css";

function Bvaccine() {
  const [showtable, setShowtable] = useState(false);
  const [babydate, setbabydate] = useState([]);
  const [hasToken, setHasToken] = useState(false);
  const [babyReg, setBabyReg] = useState({
    name: "",
    gender: "",
    birthID: "",
    birthDate: "",
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
            "Content-type": "application/json; charset=UTF-8",
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
            <Form
              onSubmit={(e) => {
                e.preventDefault();

                // console.log(babyReg);
                const token = localStorage.getItem("token");

                axios
                  .post("/api/baby", babyReg, {
                    headers: {
                      Authorization: `Token ${token}`,
                    },
                  })
                  .then((response) => {
                    setbabydate(response);
                    console.log(response);
                    setBabyReg({
                      name: "",
                      gender: "",
                      birthID: "",
                      birthDate: "",
                    });
                    alert("Successfully Added!");
                    setShowtable(true);
                  })
                  .catch((err) => console.log(err));

                // axios
                //   .post("/api/event/baby/create", {
                //     headers: {
                //       Authorization: `Token ${token}`,
                //     },
                //   })
                //   .catch((err) => console.log(err));

                // axios
                //   .get("/api/baby", {
                //     headers: {
                //       Authorization: `Token ${token}`,
                //     },
                //   })
                //   .then((data) => {
                //     const res = data.data;
                //     const length = res.length;
                //     setbabydate(res[length - 1]);
                //     console.log(babydate);
                //   })
                //   .catch((error) => {
                //     console.log(error);
                //   });
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
                    <th>3rd Dose</th>
                    <th>4th Dose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1 - BCG Vaccine</td>
                    <td>
                      {new Date(
                        babydate.data.vaccines[0].vaccine_date
                      ).toDateString()}
                    </td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>2 - Pentavalent Vaccine</td>
                    <td>
                      {new Date(
                        babydate.data.vaccines[1].vaccine_date
                      ).toDateString()}
                    </td>
                    <td>
                      {new Date(
                        babydate.data.vaccines[5].vaccine_date
                      ).toDateString()}
                    </td>
                    <td>
                      {new Date(
                        babydate.data.vaccines[9].vaccine_date
                      ).toDateString()}
                    </td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>3 - Pneumococcal Vaccine</td>
                    <td>
                      {new Date(
                        babydate.data.vaccines[1].vaccine_date
                      ).toDateString()}
                    </td>
                    <td>
                      {new Date(
                        babydate.data.vaccines[5].vaccine_date
                      ).toDateString()}
                    </td>
                    <td>
                      {new Date(
                        babydate.data.vaccines[9].vaccine_date
                      ).toDateString()}
                    </td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>4 - Oral Polio Vaccine</td>
                    <td>
                      {new Date(
                        babydate.data.vaccines[1].vaccine_date
                      ).toDateString()}
                    </td>
                    <td>
                      {new Date(
                        babydate.data.vaccines[5].vaccine_date
                      ).toDateString()}
                    </td>
                    <td>
                      {new Date(
                        babydate.data.vaccines[9].vaccine_date
                      ).toDateString()}
                    </td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>5 - Rota Virus Vaccine</td>
                    <td>
                      {new Date(
                        babydate.data.vaccines[1].vaccine_date
                      ).toDateString()}
                    </td>
                    <td>
                      {new Date(
                        babydate.data.vaccines[5].vaccine_date
                      ).toDateString()}
                    </td>
                    <td>
                      {new Date(
                        babydate.data.vaccines[9].vaccine_date
                      ).toDateString()}
                    </td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>6 - Measles Rubella Vaccine</td>
                    <td>
                      {new Date(
                        babydate.data.vaccines[12].vaccine_date
                      ).toDateString()}
                    </td>
                    <td>
                      {new Date(
                        babydate.data.vaccines[13].vaccine_date
                      ).toDateString()}
                    </td>
                    <td>N/A</td>
                    <td>N/A</td>
                  </tr>
                </tbody>
              </Table>
              )}
            </div>
          </>
        )}
      </Container>
    </>
  );
}

export default Bvaccine;
