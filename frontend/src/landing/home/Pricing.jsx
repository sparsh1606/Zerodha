import ArrowBtn from "../ArrowBtn";

function Pricing() {
  return (
    <>
      <div className="container mt-5 mb-5 p-5 text-muted">
        <div className="row">
          <div className="col-6">
            <h3 className="mb-4">Unbeatable pricing</h3>
            <p>
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
            <ArrowBtn title="See pricing" link="" />
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col d-flex align-items-end">
                <img
                  src="/media/pricing0.svg"
                  alt="Pricing"
                  className="img-fluid"
                  style={{width:"50%" }}
                />
                <p style={{fontSize:"0.75rem"}}>Free account opening</p>
              </div>
              <div className="col d-flex align-items-end">
                <img
                  src="/media/pricing0.svg"
                  alt="Pricing"
                  className="img-fluid"
                  style={{width:"50%" }}
                />
                <p style={{fontSize:"0.75rem"}}>Free equity delivery and direct mutual funds</p>
              </div>
              <div className="col d-flex align-items-end">
                <img
                  src="/media/intradayTrades.svg"
                  alt="Intraday Trades"
                  className="img-fluid"
                  style={{width:"50%" }}
                />
                <p style={{fontSize:"0.75rem"}}>Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
