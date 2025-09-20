function Awards() {
  return (
    <>
      <div className="container mt-5 p-5 mb-5">
        <div className="row">
          <div className="col-6">
            <img src="media\largestBroker.svg" alt="" />
          </div>
          <div className="col-6">
            <h1>Largest stock broker in India</h1>
            <p>
              {" "}
              2+ million Zerodha clients contribute to over 15% of all retail
              order volumes in India daily by trading and investing in:
            </p>
            <div className="row mt-5 text-muted">
              <div className="col">
                <ul>
                  <li>Equity</li>
                  <li>Futures & Options</li>
                  <li>Currency Derivatives</li>
                </ul>
              </div>
              <div className="col">
                <ul>
                  <li>Stocks & IPOs</li>
                  <li>Direct mutual funds</li>
                  <li>Bonds & Govt. Secutity</li>
                </ul>
              </div>
            </div>
            <div className="row pe-5 py-5">
              <img src="media\pressLogos.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Awards;
