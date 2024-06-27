import React from "react";
import "../../index.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container  nav-container ">
      <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom fixed-top mb-4">
        <div className="container">
          <Link to="/" className="navbar-brand" href="#">
            <img
              src="/images/zerodha.svg"
              alt="zerodha logo"
              style={{ width: "25%" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <form className="d-flex"> */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pricing" className="nav-link" href="#">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/support" className="nav-link" href="#">
                  Support
                </Link>
              </li>
              <li>
                <a className="nav-link">
                  <i className="fa-solid fa-bars "></i>
                </a>
              </li>
            </ul>
            {/* </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
