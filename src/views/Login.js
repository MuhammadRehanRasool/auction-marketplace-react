import React, { useEffect, useState } from "react";
import "./../scss/Auth.scss";
import { Link } from "react-router-dom";
import { setMessage, resetMessage } from "./../CONSTANT";

export default function Login() {
  const [formdata, setFormdata] = useState({
    username: "",
    password: "",
  });

  const [isForget, setIsForget] = useState(false);

  const changeFormdata = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    resetMessage();
    if (formdata.username !== "") {
      if (formdata.password !== "") {
        return true;
      } else {
        setMessage("Please enter password.", "danger");
      }
    } else {
      setMessage("Please enter mail or username.", "danger");
    }
    return false;
  };

  const login = () => {
    if (validate()) {
      alert("I am logging in", formdata);
      console.log("I am logging in", formdata);
    }
  };
  const reset = () => {
    if (validate()) {
      alert("I am resetting my password", formdata);
      console.log("I am resetting my password", formdata);
    }
  };

  return (
    <div className="__Auth">
      <div className="form">
        <img src="logo.svg" className="logo" />
        <h4 className="heading my-3">
          Welcome to <span className="fw-bold">DroppinPrices</span>
        </h4>
        <div className="field my-1">
          <label className="text-muted mb-1 ms-2">Mail or Username</label>
          <input
            type="text"
            name="username"
            value={formdata.username}
            onChange={changeFormdata}
          />
        </div>
        <div className="field my-1">
          <label className="text-muted mb-1 ms-2">
            {isForget ? "New " : ""}Password
          </label>
          <input
            type="password"
            name="password"
            value={formdata.password}
            onChange={changeFormdata}
          />
        </div>
        <span
          className="text-danger my-2 me-auto"
          role="button"
          onClick={() => {
            setIsForget(!isForget);
          }}
        >
          {isForget ? "Back to login!" : "Forgot your password?"}
        </span>
        <span id="error" style={{ display: "none" }}></span>
        <button className="button my-3" onClick={isForget ? reset : login}>
          {isForget ? "Reset" : "Login"}
        </button>
        <span className="redirect mt-3 mb-5">
          Don’t have any account? <Link to="/register">Register</Link>
        </span>
      </div>
    </div>
  );
}
