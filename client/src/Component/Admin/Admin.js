import React from "react";
import "./Admin.css";
import { Container, Button, Card, Table, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

function Admin() {
  const [users, setUser] = useState([]);
  const [baby, setbaby] = useState([]);
  const [womens, setwomens] = useState([]);
  const [show, setShow] = useState(false);
  const [showBaby, setShowBaby] = useState(false);
  const [showWomen, setShowWomen] = useState(false);
  const [womenDeleteModal, setWomenDeleteModal] = useState(false);
  const [babyDeleteModal, setbabyDeleteModal] = useState(false);
  const [deletedIdBaby, setDeletedIdBaby] = useState(null);
  const [deletedIdWoman, setDeletedIdWoman] = useState(null);
  const [editedUser, setEditedUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const [editedBaby, setEditedBaby] = useState({
    birthID: "",
    name: "",
    gender: "",
    birthDate: "",
  });

  const [editedWomen, setEditedWomen] = useState({
    nationalID: "",
    name: "",
    monthOfPregnency: "",
  });

  const handelShowWomen = (user) => {
    setShowWomen(true);
    setEditedWomen(user);
  };
  const handelcloseWomen = () => {
    setShowWomen(false);
  };

  const handleBabyClose = () => setShowBaby(false);
  const handleBabyShow = (user) => {
    setShowBaby(true);
    setEditedBaby(user);
  };

  const handleClose = () => setShow(false);
  const handleShow = (user) => {
    console.log(user);
    setShow(true);
    setEditedUser(user);
  };

  const handelBabyDeleteOpen = (id) => {
    setDeletedIdBaby(id);
    setbabyDeleteModal(true);
  };

  const handelBabyDeleteClose = () => {
    setbabyDeleteModal(false);
  };

  const handelWomenDeleteOpen = (id) => {
    setDeletedIdWoman(id);
    setWomenDeleteModal(true);
  };

  const handelWomenDeleteClose = () => {
    setWomenDeleteModal(false);
  };

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

  const handelInputUser = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setEditedUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handelInputBaby = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setEditedBaby((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handelInputWomen = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setEditedWomen((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="body" style={{ background: "#eeeeee" }}>
      <div className="box-div">
        <Container className="top-title">
          <div>
            <h2>Welcome To Admin Panel</h2>
            <h5>Total User {users.length}</h5>
          </div>
          <div>
            <Button
              variant="outline-secondary"
              onClick={() => {
                localStorage.removeItem("token");
                // setIsAuthenticated(false);
                alert("Log Out Successfully");
                // setLogin(true);
                // setLogout(false);
                window.location.href = "http://localhost:3000/";
              }}
            >
              Log Out
            </Button>
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
                  key={index}
                  className="single-user-card"
                  style={{ width: "18rem", marginTop: "15px" }}
                >
                  <Card.Body>
                    <Card.Title>{user.username}</Card.Title>
                    <Card.Text className="card-text">
                      <p>Email : {user.email}</p>
                      <p>Phone : {user.phone}</p>
                      {/* <p>Password : {user.password}</p> */}
                    </Card.Text>
                    <Button
                      onClick={() => handleShow(user)}
                      variant="primary"
                      size="small"
                    >
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
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Guardian Name</th>
                  <th>Name</th>
                  <th>Birth ID</th>
                  <th>Gender</th>
                  <th>Birth Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {baby.map((single, index) => {
                  return (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{single.guardian_name}</td>
                      <td>{single.name}</td>
                      <td>{single.birthID}</td>
                      <td>{single.gender}</td>
                      <td>{single.birthDate}</td>
                      <td style={{ textAlign: "center" }}>
                        <button
                          style={{ marginRight: "10px" }}
                          className="btn btn-primary"
                          onClick={() => handleBabyShow(single)}
                        >
                          Edit
                        </button>
                        <Button
                          className="btn btn-danger"
                          onClick={() => handelBabyDeleteOpen(single._id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Container>
      </section>
      <section className="registered-women-vaccine">
        <Container>
          <h2 className="section-title">
            Registerd Pregnent Women Vaccine Service
          </h2>
          <div className="All-women-container">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Index</th>
                  <th>National ID</th>
                  <th>Name</th>
                  <th>Month of pregnancy</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {womens.map((single, index) => {
                  return (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{single.nationalID}</td>
                      <td>{single.name}</td>
                      <td>{single.monthOfPregnency}</td>
                      <td style={{ textAlign: "center" }}>
                        <button
                          style={{ marginRight: "10px" }}
                          className="btn btn-primary"
                          onClick={() => handelShowWomen(single)}
                        >
                          Edit
                        </button>
                        <Button
                          className="btn btn-danger"
                          onClick={() => handelWomenDeleteOpen(single._id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Container>
      </section>
      {/* {user Modal} */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>User Information Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>User Name</label>
            <input
              type="text"
              placeholder="Enter Your Username"
              name="username"
              className="form-control"
              onChange={handelInputUser}
              value={editedUser.username}
            />
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter Your Email"
              name="email"
              className="form-control"
              onChange={handelInputUser}
              value={editedUser.email}
            />
            <label>Phone Number</label>
            <input
              type="number"
              placeholder="Enter Your phone number"
              name="phone"
              className="form-control"
              onChange={handelInputUser}
              value={editedUser.phone}
            />
            <label>Password</label>
            <input
              type="text"
              placeholder="Enter Your Password"
              name="password"
              className="form-control"
              onChange={handelInputUser}
              // value={editedUser.password}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              console.log(editedUser);
              axios
                .put(`/api/users/${editedUser._id}`, editedUser)
                .then((res) => {
                  window.location.reload();
                  console.log(res);
                })
                .catch((err) => console.log(err));
            }}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      {/* {Baby Modal} */}
      <Modal
        show={showBaby}
        onHide={handleBabyClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Your name"
              name="name"
              className="form-control"
              onChange={handelInputBaby}
              value={editedBaby.name}
            />
            <label>Birth certificate Number</label>
            <input
              type="number"
              placeholder="Birth certificate Number"
              name="birthID"
              className="form-control"
              onChange={handelInputBaby}
              value={editedBaby.birthID}
            />
            <label>Gender</label>
            <input
              type="text"
              placeholder="Gender"
              name="gender"
              className="form-control"
              onChange={handelInputBaby}
              value={editedBaby.gender}
            />
            <label>Birth Date</label>
            <input
              type="date"
              placeholder="Birth Date"
              name="birthDate"
              className="form-control"
              onChange={handelInputBaby}
              value={editedBaby.birthDate}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleBabyClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              console.log(editedBaby);
              axios
                .put(`/api/baby/${editedBaby._id}`, editedBaby)
                .then((res) => {
                  window.location.reload();
                  console.log(res);
                })
                .catch((err) => console.log(err));
            }}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      {/* {women modal} */}
      <Modal
        show={showWomen}
        onHide={handelcloseWomen}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>National ID</label>
            <input
              type="number"
              placeholder="Enter Your NID"
              name="nationalID"
              className="form-control"
              onChange={handelInputWomen}
              value={editedWomen.nationalID}
            />
            <label>Name</label>
            <input
              type="name"
              placeholder="Enter Your Name"
              name="name"
              className="form-control"
              onChange={handelInputWomen}
              value={editedWomen.name}
            />
            <label>Month of Pregnency</label>
            <input
              type="number"
              placeholder="Month of Pregnency"
              name="monthOfPregnency"
              className="form-control"
              onChange={handelInputWomen}
              value={editedWomen.monthOfPregnency}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handelcloseWomen}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              console.log(editedWomen);
              axios
                .put(`/api/women/${editedWomen._id}`, editedWomen)
                .then((res) => {
                  window.location.reload();
                  console.log(res);
                })
                .catch((err) => console.log(err));
            }}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      {/* {Women Delete MOdal} */}
      <Modal
        show={womenDeleteModal}
        onHide={handelWomenDeleteClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          {/* <Modal.Title>Delete Information</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <span style={{ marginLeft: "50px", fontSize: "20px" }}>
            Are you Sure you want to delete..?
          </span>
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: "center" }}>
          <Button
            variant="danger"
            onClick={() => {
              axios
                .delete(`/api/women/${deletedIdWoman}`)
                .then((res) => {
                  console.log(res);
                  window.location.reload();
                })
                .catch((err) => console.log(err));
            }}
          >
            ok
          </Button>
        </Modal.Footer>
      </Modal>
      {/* {Baby delete Modal} */}
      <Modal
        show={babyDeleteModal}
        onHide={handelBabyDeleteClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          {/* <Modal.Title>Delete Information</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <span style={{ marginLeft: "50px", fontSize: "20px" }}>
            Are you Sure you want to delete..?
          </span>
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: "center" }}>
          <Button
            variant="danger"
            onClick={() => {
              console.log(deletedIdBaby);
              axios
                .delete(`/api/baby/${deletedIdBaby}`)
                .then((res) => {
                  console.log(res);
                  window.location.reload();
                })
                .catch((err) => console.log(err));
            }}
          >
            ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Admin;
