import React from "react";

const Universe = () => {
  return (
    <div className="container mt-5 p-4">
      <div className="row text-center ">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img
            src="images/products/smallcase-logo.png"
            className="img-container"
          />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="images/products/streak-logo.png"
            className="img-container"
          />
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="images/products/sensibull-logo.svg"
            className="img-container"
          />
          <p className="text-small text-muted">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="images/products/zerodhafundhouse.png"
            className="img-container"
          />
          <p className="text-small text-muted">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="images/products/tijori.svg" className="img-container" />
          <p className="text-small text-muted">Fundamental research platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="images/products/ditto-logo.png" className="img-container" />
          <p className="text-small text-muted">Insurance Sign up now</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5 my-button mt-3"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
};

export default Universe;
