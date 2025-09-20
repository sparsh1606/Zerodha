function Universe() {
  return (
    <>
      <div className="container p-5 mt-5 mb-5 text-center">
        <div className="row">
          <div className="col">
            <h2 className="fs-4 mb-3">The Zerodha Universe</h2>
            <p className="fs-5 text-muted mb-5">
              Extend your trading and investment experience even further with
              our partner platforms
            </p>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-4 p-3">
            <img src="media\zerodhaFundhouse.png" alt="zerodhafoundhouse" className="mb-2" style={{width:"50%"}}/>
            <p className="text-muted" style={{fontSize:"13px"}}>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 p-3">
            <img src="media\sensibullLogo.svg" alt="sensibull" className="mb-2" style={{width:"50%"}}/>
            <p className="text-muted" style={{fontSize:"13px"}}>
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col-4 p-3">
            <img src="media\goldenpiLogo.png" className="mb-2" alt="" />
            <p className="text-muted" style={{fontSize:"13px"}}>
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more
            </p>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-4 p-3">
            <img src="media\streakLogo.png" alt="streak" className="mb-2" style={{width:"50%"}}/>
            <p className="text-muted" style={{fontSize:"13px"}}>
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col-4 p-3">
            <img src="media\smallcaseLogo.png" alt="smallcase" className="mb-2" style={{width:"50%"}}/>
            <p className="text-muted" style={{fontSize:"13px"}}>
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.{" "}
            </p>
          </div>
          <div className="col-4 p-3">
            <img src="media\dittoLogo.png" alt="ditto" className="mb-2" style={{width:"30%"}} />
            <p className="text-muted" style={{fontSize:"13px"}}>
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
        </div>
        <div className="row">
            <button className="mt-4 btn btn-primary p-2 fs-5 mb-5 " style={{width:"20%", height:"45px", margin:"0px auto", backgroundColor:"rgb(56, 126, 209)", color:"white"}}>Signup for free</button>
        </div>
      </div>
    </>
  );
}
export default Universe;
