import React from "react";

const RightSection = ({ imgUrl, heading, description, link }) => {
  return (
    <div className="container my-container">
      <div className="row">
        <div className="col-1"></div>

        <div className="col-4 card">
          <h1>{heading}</h1>
          <p className="fs-5 text-muted"> {description}</p>
          <a href="#">
            {link} <i className="fa-solid fa-arrow-right m-2"></i>
          </a>
        </div>
        <div className="col-1"></div>

        <div className="col-6">
          <img src={imgUrl} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
