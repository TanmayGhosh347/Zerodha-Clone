import React from "react";

const Pricing = () => {
  return (
    <div className="container mb-4">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-5 ">
          <h2>Unbeatable pricing</h2>
          <p>
            We pioneered the concept of discount broking and price <br />{" "}
            transparency in India. Flat fees and no hidden charges.
          </p>
          <a>
            <span>
              See Pricing<i className="fa-solid fa-arrow-right m-2"></i>
            </span>
          </a>
        </div>
        <div className="col-5">
          <div className="row text-center">
            <div className="col pt-4 pb-4 border">
              <h1>₹0</h1>
              <p>
                Free equity delivery and <br /> direct mutual funds
              </p>
            </div>
            <div className="col pt-4 pb-4 border">
              <h1>₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
        <div className="col-1 "></div>
      </div>
    </div>
  );
};

export default Pricing;
