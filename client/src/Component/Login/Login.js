import axios from "axios";
import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import LogInImg from "../Photos/clogin.svg";
import Creg from "../Photos/creg.svg";
import "./login.css";

const Login = ({ isAuthenticated, setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [avatar, setAvatar] = useState("");
  const history = useHistory();
  //reg
  const reg = (e) => {
    e.preventDefault();
    document.getElementById("login").style.left = "50%";
    document.getElementById("reg").style.left = "-50%";
  };
  const login = (e) => {
    e.preventDefault();
    document.getElementById("login").style.left = "-50%";
    document.getElementById("reg").style.left = "50%";
  };

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("/api/login/", {
        usernameL: username,
        passwordL: password,
      })
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        setIsAuthenticated(true);
        if (username === "admin") {
          history.push("/admin");
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        alert(error.response.data.errors.msg);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    axios
      .post("/api/register/", {
        username,
        email,
        phone,
        password,
        avatar,
      })
      .then((response) => {
        alert(response.data.message);
      })
      .catch((err) => {
        console.log(err.response);
        alert(err.response.data.errors.msg);
      });
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="wrapper">
        <div className="loginWrapper" id="login">
          <div style={{ textAlign: "center", padding: "20px" }}>
            <img src={LogInImg} alt="login" height="170px" />
          </div>
          <div>
            <h4
              style={{
                textAlign: "center",
                padding: "20px",
                color: "green",
                fontWeight: "700",
              }}
            >
              Vaccination and Health Care
            </h4>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="usernameLogin">Email Phone/username</label>
                <input
                  type="text"
                  className="form-control"
                  name="usernameL"
                  id="usernameLogin"
                  placeholder="Enter Phone/username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
                <small className="form-text text-muted">
                  We'll never share your info with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="passwordLogin">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="passwordL"
                  id="passwordLogin"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <p className="pError" id="login-error"></p>
              </div>
              <div className="form-check">
                <p style={{ textAlign: "right" }}>
                  Need an{" "}
                  <span
                    onClick={login}
                    style={{ color: "blue", cursor: "pointer" }}
                  >
                    Account?
                  </span>
                </p>
              </div>
              <div className="form-check">
                <button type="submit" className="btnn">
                  Log In
                </button>
              </div>
              <br />
            </form>
          </div>
        </div>

        <div className="regWrapper py-2" id="reg">
          <div style={{ textAlign: "center", padding: "20px" }}>
            <img src={Creg} alt="login" height="170px" />
          </div>
          <div>
            <h4
              style={{
                textAlign: "center",
                padding: "20px",
                color: "green",
                fontWeight: "700",
              }}
            >
              Registration Page
            </h4>
            <form
              encType="multipart/form-data"
              id="user_registration"
              onSubmit={handleRegister}
            >
              <>
                <div className="row">
                  <div className="col-sm">
                    <div className="form-group">
                      <label htmlFor="username">UserName</label>
                      <input
                        type="text"
                        className="form-control i-error"
                        name="username"
                        id="username"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                      />
                      <p
                        id="error-username"
                        className="error username-error pError"
                      ></p>
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="text"
                        className="form-control i-error"
                        name="phone"
                        id="phone"
                        placeholder="Enter phone"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
                      <p
                        id="error-phone"
                        className="error phone-error pError"
                      ></p>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="form-group">
                      <label htmlFor="email">Email Enter</label>
                      <input
                        type="email"
                        className="form-control i-error"
                        name="email"
                        id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                      <p
                        id="error-email"
                        className="error email-error pError"
                      ></p>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control i-error"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                      <p
                        id="error-password"
                        className="error password-error pError"
                      ></p>
                    </div>
                  </div>
                  <div>
                    <div className="form-group">
                      <label htmlFor="avater">Set avater</label>
                      <input
                        type="file"
                        name="avater"
                        className="form-control"
                        id="avater"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          setAvatar(file);
                        }}
                      />
                      <p id="error-avater" className="avatar-error pError"></p>
                      <p className="common-error pError"></p>
                    </div>
                  </div>
                </div>
              </>

              <div className="form-check">
                <p style={{ textAlign: "right" }}>
                  Already Have{" "}
                  <span
                    onClick={reg}
                    style={{ color: "blue", cursor: "pointer" }}
                  >
                    Account?
                  </span>
                </p>
              </div>
              <div className="form-check">
                <input type="submit" className="btnn" value="Sign Up" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default Login;
