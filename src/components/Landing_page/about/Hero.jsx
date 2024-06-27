import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="box-1">
          <h2 className="mt-4 m-4">
            We pioneered the discount broking model in India.
            <br />
            Now, we are breaking ground with our technology.
          </h2>
          <hr />
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-5">
            <p className="fs-5 text-muted">
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>
            <p className="fs-5 text-muted">
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>
            <p className="fs-5 text-muted">
              Over 1+ Crore clients place millions of orders every day through
              our powerful ecosystem of investment platforms, contributing over
              15% of all Indian retail trading volumes.
            </p>
          </div>
          <div className="col-5">
            <p className="fs-5 text-muted">
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
            </p>
            <p className="fs-5 text-muted">
              Rainmatter, our fintech fund and incubator, has invested in
              several fintech startups with the goal of growing the Indian
              capital markets.
            </p>
            <p className="fs-5 text-muted">
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our blog or see what the media is saying
              about us.
            </p>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
