import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../scss/Navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = (props) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <nav className="navbar navbar-expand-lg __Navbar">
        <Link to="/" className="navbar-brand">
          <img className="logo" src="/logo.svg" alt="navbar logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <MenuIcon className="icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link simple-nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/bidGallery" className="nav-link simple-nav-link active">
                Bid Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/categories"
                className="nav-link simple-nav-link active"
              >
                Categories
              </Link>
            </li>
          </ul>
          <div className="form-inline d-flex flex-row my-2 my-lg-0">
            <div className="d-flex navbar-search">
              <input
                className="form-control me-2"
                placeholder="Search any product or keyword"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <img src="/icons/search.png" alt="search" role="button"/>
            </div>

            <ul className="navbar-nav mr-auto">
              {true ? (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="Button-Custom-1 unfill">
                      <span className="content">
                        <span className="type">Log In</span>
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item signup">
                    <Link to="/register" className="Button-Custom-1 fill">
                      <span className="content">
                        <span className="type">Register</span>
                      </span>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/history" className="Button-Custom-1 unfill">
                      <span className="content">
                        <span className="type">Example</span>
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item signup">
                    <Link to="/profile" className="Button-Custom-1 fill">
                      <span className="content">
                        <span className="type">Profile</span>
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item signup">
                    <button className="Button-Custom-1 white" onClick={""}>
                      <span className="content">
                        <span className="type">Logout</span>
                      </span>
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
