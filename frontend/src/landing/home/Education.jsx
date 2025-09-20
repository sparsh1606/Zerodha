import ArrowBtn from "../ArrowBtn";

function Education() {
  return (
    <>
      <div className="container mt-5 mb-5 p-5 ">
        <div className="row">
          <div className="col-6">
           <img src="media\education.svg" alt="" />
          </div>
          <div className="col-6">
            <h3 className="mt-3">Free and open market education</h3>
            <p className="mt-3">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <ArrowBtn title="Varsity" link="" />
            <p className="mt-3">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
            <ArrowBtn title="TradingQ&A" link="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;