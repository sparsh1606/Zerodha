function Hero() {
  return (
    <div className="container p-5 mt-5 mb-5">
      <div className="row mb-5">
        <div className="col">
          <div className="text-center">
            <h3 className="fs-2 mt-5">Charges</h3>
            <p className="text-muted mt-3 fs-5 mb-5">
              List of all charges and taxes
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-4 mt-5">
          <img src="media\pricing0.svg" alt="" className="mb-3" style={{width:"70%", marginLeft:"2.75rem"}}/>
          <h2 className="text-center mt-6">Free equity delivery</h2>
          <p className="text-muted fs-6 mt-4 lh-lg text-center">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img src="media\intradayTrades.svg" alt="" className="mb-3" style={{width:"70%", marginLeft:"2.75rem"}}/>
          <h2 className="text-center mt-6">Intraday and F&O trades</h2>
          <p className="text-muted fs-6 mt-4 lh-lg text-center">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img src="media\pricing0.svg" alt="" className="mb-3" style={{width:"70%", marginLeft:"2.75rem"}}/>
          <h2 className="text-center mt-6">Free direct MF</h2>
          <p className="text-muted fs-6 mt-4 lh-lg text-center">
            All direct mutual fund investments are absolutely<br/> free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Hero;
