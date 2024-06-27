import React from "react";

export default function Awards() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6 p-5">
            <img className="p-5" src="/images/award.svg" alt="award-image" />
          </div>
          <div className="col-6 p-5 mt-5 my-line">
            <h1>Largest stock broker in India</h1>
            <br />
            <p>
              1.5+ Crore Zerodha clients contribute to over 15% of all retail
              order volumes in India daily by trading and investing in:
            </p>
            <br />
            <div className="row">
              <div className="col-6">
                <ul className="ul-line">
                  <li>
                    <p>Futures and Options</p>
                  </li>
                  <li>
                    <p>Commodity derivatives</p>
                  </li>
                  <li>
                    <p>Currency derivatives</p>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="ul-line">
                  <li>
                    <p>Stocks & IPOs</p>
                  </li>
                  <li>
                    <p>Direct mutual funds</p>
                  </li>
                  <li>
                    <p>Bonds and Govt. Securities</p>
                  </li>
                </ul>
              </div>
              <img
                className="mt-4"
                src="/images/press-logo.png"
                alt="press-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
