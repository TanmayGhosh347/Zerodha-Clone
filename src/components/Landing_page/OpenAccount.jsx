import React from "react";
import "../../index.css";

const OpenAccount = () => {
  return (
    <div className="container p-5  text-center mb-5 ">
      <div className="row">
        <h2 className="mt-5 pb-2" style={{ fontSize: "2rem" }}>
          Open a Zerodha account
        </h2>
        <p className="fs-6 pb-3 text-saturated" style={{ fontSize: "1rem" }}>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button className="btn btn-primary m-auto p-2 fs-5 my-button m-auto">
          Sign up now
        </button>
      </div>
    </div>
  );
};

export default OpenAccount;
