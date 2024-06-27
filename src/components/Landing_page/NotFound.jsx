import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mt-6 mb-5">
      <div className="row  mt-5  pb-6">
        <div className="col12" style={{ height: "20vh" }}></div>
        <div className="col-5 pb-5 text-center pt-4">
          <h2>404</h2>
          <h1>The page are you looking for could not found</h1>
          <p>
            We couldn’t find the page you were looking for. <br />
            Visit &nbsp;
            <Link to="/">Zerodha’s home page</Link>
          </p>
        </div>
        <div className="col-7">
          <img
            src="/images/not-found.jpg"
            alt="not found image"
            style={{ width: "75%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
