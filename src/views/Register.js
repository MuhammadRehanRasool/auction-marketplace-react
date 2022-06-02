import React from "react";
import "./../scss/Auth.scss";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="__Auth">
      <div className="form">
        <div className="row">
          <img src="logo.svg" />
        </div>
        <div className="row">
          <h1>
            Welcome to <span>DroppinPrices</span>
          </h1>
        </div>
        <div className="row">
          <label>Mail or username</label>
          <input />
        </div>
        <div className="row">
          <label>Password</label>
          <input />
        </div>
        <div className="row">
          <span className="text-danger" role="button">
            Forgot your password?
          </span>
        </div>
        <div className="row">
          <button>Login</button>
        </div>
        <div className="row">
          <span>
            Don’t have any account? <Link to="/register">Register</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
