import React from "react";
import "./../scss/Footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="__Footer">
      <div className="upper">
        <span className="u1">Get all the updates about dropinPrices</span>
        <span className="u2 mt-4">
          Subscribe for the latest news, drops & collections
        </span>
        <div className="u3 mt-4">
          <input type="text" className="form-control" />
          <button className="btn btn-light" type="button">
            Subscribe
          </button>
        </div>
        <span className="u4 mt-4">
          After reading the <span className="giant">Privacy Notice</span>, you
          may subscribe for our newsletter to get special offers & surveys
          delivered to your inbox. Unsubscribe at any time by clicking on the
          link in the email.
        </span>
        <div className="mt-4 u5">
          <input className="form-check-input" type="checkbox" defaultValue />
          <span>
            By entering my email and subscribing I confirm and agree to the
            above.
          </span>
        </div>
        <br />
        <span className="u6 mt-4">Join our community</span>
        <div className="u7 mt-4">
          <a href="/#" target={"blank"}>
            <img src="icons/Vector.png" />
          </a>
          <a href="/#" target={"blank"}>
            <img src="icons/Vector-1.png" />
          </a>
          <a href="/#" target={"blank"}>
            <img src="icons/Vector-2.png" />
          </a>
          <a href="/#" target={"blank"}>
            <img src="icons/Vector-3.png" />
          </a>
          <a href="/#" target={"blank"}>
            <img src="icons/Vector-4.png" />
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-between border-top mt-4 pt-3">
        <span className="text-light">© 2018 - 2022 Bidonline networks, Inc</span>
        <ul className="list-unstyled d-flex">
          <li className="ms-5">
            <Link className="link-light" to="/">
              Privacy Policy
            </Link>
          </li>
          <li className="ms-5">
            <Link className="link-light" to="/">
              Terms of Service
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
