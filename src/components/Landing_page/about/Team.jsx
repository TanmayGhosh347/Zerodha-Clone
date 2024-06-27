import React from "react";

const Team = () => {
  return (
    <div className="container team-section ">
      <div className="row mb-4 mt-4">
        <div className="col-6 img-container">
          <img className="photo m-auto" src="/images/photo.jpg" alt="Photo" />
          <div>
            <h5>Nithin Kamath</h5>
            <p>Founder, CEO</p>
          </div>
        </div>
        <div className="col-6">
          <h2
            className="text-muted
           mt-4 pb-4  pt-5 mb-4"
          >
            People
          </h2>

          <p className="text-muted fs-5">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className="text-muted fs-5">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="text-muted fs-5">Playing basketball is his zen.</p>
          <p className="text-muted fs-5">
            Connect on Homepage / TradingQnA / Twitter
          </p>
        </div>
        <hr className="mt-5" />
      </div>
    </div>
  );
};

export default Team;
