import React from "react";
import "../../../index.css";
export default function Hero() {
  return (
    <div className="container p-5  text-center mb-5 ">
      <div className="row">
        <img src="images/home-hero.png" alt="hero image" className="mb-5" />
        <h1 className="mt-5">Invest in everything</h1>
        <p className="fs-4">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <button className="btn btn-primary m-auto p-2 fs-5 my-button m-auto">
          Sign up now
        </button>
      </div>
    </div>
  );
}
