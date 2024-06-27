import React from "react";

const LeftSection = ({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-7">
          <img src={imageUrl} alt="image" />
        </div>
        <div className="col-4 ">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          {tryDemo !== "" && (
            <a href="#" className="m-4 ml-6">
              {tryDemo}
              <i className="fa-solid fa-arrow-right m-2"></i>
            </a>
          )}
          {learnMore !== "" && (
            <a href="#">
              {learnMore}
              <i className="fa-solid fa-arrow-right m-2"></i>
            </a>
          )}
          <br />
          <br />
          <a href="#" className="m-3">
            <img
              src="/images/products/google-play-badge.svg"
              alt="google play image"
            />
          </a>
          <a href="#">
            <img
              src="/images/products/appstore-badge.svg"
              alt="app stote image"
            />
          </a>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
};

export default LeftSection;
