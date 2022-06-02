import React, { useState } from "react";
import "./../scss/Auth.scss";
// import { Link } from "react-router-dom";
import { setMessage, resetMessage } from "./../CONSTANT";
//eslint-disable-next-line
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

export default function Register() {
  const INIT = {
    name: "",
    username: "",
    email: "",
    company: "",
    password: "",
    confirmPassword: "",
    state: "",
    phone: "",
    postalCode: "",
    address: "",
    check: false,
  };
  const [formdata, setFormdata] = useState(INIT);

  const changeFormdata = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    resetMessage();
    if (formdata.name !== "") {
      if (formdata.username !== "") {
        if (formdata.email !== "" && EMAIL_REGEX.test(formdata.email)) {
          if (formdata.company !== "") {
            if (
              formdata.password !== "" &&
              formdata.confirmPassword !== "" &&
              formdata.password === formdata.confirmPassword
            ) {
              if (formdata.state !== "") {
                if (formdata.phone !== "") {
                  if (formdata.postalCode !== "") {
                    if (formdata.address !== "") {
                      if (formdata.check) {
                        return true;
                      } else {
                        setMessage(
                          "Please check newsletter subscription.",
                          "danger"
                        );
                      }
                    } else {
                      setMessage("Please enter address.", "danger");
                    }
                  } else {
                    setMessage("Please enter postal code.", "danger");
                  }
                } else {
                  setMessage("Please enter phone number.", "danger");
                }
              } else {
                setMessage("Please enter state.", "danger");
              }
            } else {
              setMessage("Password should match in both fields.", "danger");
            }
          } else {
            setMessage("Please enter company.", "danger");
          }
        } else {
          setMessage("Please enter valid email.", "danger");
        }
      } else {
        setMessage("Please enter username.", "danger");
      }
    } else {
      setMessage("Please enter name.", "danger");
    }
    return false;
  };

  const register = () => {
    if (validate()) {
      alert("I am logging in", formdata);
      console.log("I am logging in", formdata);
    }
  };

  return (
    <div className="__Auth">
      <div className="form register">
        <img src="logo.svg" className="logo" alt="company logo" />
        <h4 className="heading my-3 me-auto register">Personal Information</h4>
        <div className="row w-100">
          <div className="col-lg-6 col-sm-12">
            <div className="field my-1">
              <input
                type="text"
                name="name"
                value={formdata.name}
                onChange={changeFormdata}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="field my-1">
              <input
                type="text"
                name="username"
                value={formdata.username}
                onChange={changeFormdata}
                placeholder="Username"
              />
            </div>
          </div>
        </div>
        <div className="row w-100">
          <div className="col-lg-6 col-sm-12">
            <div className="field my-1">
              <input
                type="email"
                name="email"
                value={formdata.email}
                onChange={changeFormdata}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="field my-1">
              <input
                type="text"
                name="company"
                value={formdata.company}
                onChange={changeFormdata}
                placeholder="Company"
              />
            </div>
          </div>
        </div>

        <div className="row w-100">
          <div className="col-lg-6 col-sm-12">
            <div className="field my-1">
              <input
                type="password"
                name="password"
                value={formdata.password}
                onChange={changeFormdata}
                placeholder="Password"
              />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="field my-1">
              <input
                type="password"
                name="confirmPassword"
                value={formdata.confirmPassword}
                onChange={changeFormdata}
                placeholder="Confirm Password"
              />
            </div>
          </div>
        </div>

        <div className="row w-100">
          <div className="col-lg-6 col-sm-12">
            <div className="field my-1">
              <input
                type="email"
                name=""
                value={"United States of America"}
                readOnly={true}
              />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="field my-1">
              <select
                name="state"
                value={formdata.state}
                onChange={changeFormdata}
                className="form-select form-control"
              >
                <option disabled={true} selected={true} value="">
                  Select State
                </option>
                {STATES.map((state, index) => {
                  return (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>

        <div className="row w-100">
          <div className="col-lg-6 col-sm-12">
            <div className="field my-1">
              <input
                type="number"
                name="phone"
                value={formdata.phone}
                onChange={changeFormdata}
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="field my-1">
              <input
                type="text"
                name="postalCode"
                value={formdata.postalCode}
                onChange={changeFormdata}
                placeholder="Postal Code"
              />
            </div>
          </div>
        </div>
        <div className="row w-100">
          <div className="col-12">
            <div className="field my-1">
              <input
                type="text"
                name="address"
                value={formdata.address}
                onChange={changeFormdata}
                placeholder="Address"
              />
            </div>
          </div>
        </div>
        <div className="row w-100 my-3">
          <div className="col-6 w-100">
            <div className="form-check ms-3">
              <input
                className="form-check-input"
                type="checkbox"
                defaultChecked={formdata.check}
                id="flexCheckChecked"
                name="check"
                onChange={() => {
                  changeFormdata({
                    target: {
                      name: "check",
                      value: !formdata.check,
                    },
                  });
                }}
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                After reading the Privacy Notice, you may subscribe for our
                newsletter to get special offers & surveys delivered to your
                inbox. Unsubscribe at any time by clicking on the link in the
                email.
              </label>
            </div>
          </div>
        </div>

        <span id="error" style={{ display: "none" }}></span>
        <button className="button my-3" onClick={register}>
          Create free account
        </button>
      </div>
    </div>
  );
}
