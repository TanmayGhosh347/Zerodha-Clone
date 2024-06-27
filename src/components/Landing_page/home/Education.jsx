import React from "react";

const Education = () => {
  return (
    <div className="container mb-4 pt-4">
      <div className="row mb-4 pt-4">
        <div className="col-6">
          <img
            src="/images/education.svg"
            className="p-4"
            alt="image"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-5 pt-4">
          <h4>Free and open market education</h4>
          <div className="box pb-3 pt-3">
            <p>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a>
              <span>
                Varsity<i className="fa-solid fa-arrow-right m-2"></i>
              </span>
            </a>
          </div>
          <div className="box pb-3">
            <p>
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a>
              <span>
                TradingQ&A<i className="fa-solid fa-arrow-right m-2"></i>
              </span>
            </a>
          </div>
        </div>
        <div className="col1"></div>
      </div>
    </div>
  );
};

export default Education;
