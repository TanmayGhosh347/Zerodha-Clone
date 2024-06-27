import React from "react";

const Stats = () => {
  return (
    <div className="container p-5 mb-4">
      <div className="row p-5">
        <div className="col-6  text-container">
          <h2 className="mb-4">Trust with confidence</h2>
          <div className="box mb-4" style={{ width: "80%" }}>
            <h4>Customer-first always</h4>
            <p className="text-muted" style={{ fontSize: "1rem" }}>
              That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
              crores worth of equity investments.
            </p>
          </div>
          <div className="box  mb-4" style={{ width: "80%" }}>
            <h4>No spam or gimmicks</h4>
            <p className="text-muted" style={{ fontSize: "1rem" }}>
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>

          <div className="box  mb-4" style={{ width: "80%" }}>
            <h4>The Zerodha universe</h4>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>

          <div className="box  mb-4" style={{ width: "80%" }}>
            <h4>Do better with money</h4>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>
        <div className="col-6 text-center ">
          <img
            src="/images/eco-system.png"
            alt="eco system image"
            style={{ width: "99%" }}
          />
          <div className="links-cont mt-2">
            <a className="m-2">
              <span>
                Explore our products{" "}
                <i className="fa-solid fa-arrow-right m-2"></i>
              </span>
            </a>

            <a className="m-2">
              <span>
                Try Kite demo <i className="fa-solid fa-arrow-right m-2"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
