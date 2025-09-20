import ArrowBtn from "../ArrowBtn";

function Stats() {
  return (
    <>
      <div className="container mt-5 mb-5 p-5 " style={{ paddingLeft: "20px" }}>
        <div className="row">
          <div className="col-6">
            <h2 className="text-muted">Trust with confidence</h2>
            <div className="text-muted">
              <h4 className="mt-5">Customer-first always</h4>
              <p>
                That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
                crores of equity investments, making us India’s largest broker;
                contributing to 15% of daily retail exchange volumes in India.
              </p>
            </div>
            <div className="text-muted">
              <h4 className="mt-5">No spam or gimmicks</h4>
              <p>
                No gimmicks, spam, "gamification", or annoying push
                notifications. High quality apps that you use at your pace, the
                way you like. Our philosophies.
              </p>
            </div>
            <div className="text-muted">
              <h4 className="mt-5">The Zerodha universe</h4>
              <p>
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your
                needs.
              </p>
            </div>
            <div className="text-muted"> 
              <h4 className="mt-5">Do better with money</h4>
              <p>
                With initiatives like Nudge and Kill Switch, we don't just
                facilitate transactions, but actively help you do better with
                your money.
              </p>
            </div>
          </div>
          <div className="col-6" style={{ textAlign: "center" }}>
            <img src="media\ecosystem.png" alt="" style={{ width: "96%" }} />
            <ArrowBtn title="Explore our products" link="" />
            <ArrowBtn title="Try Kite demo " link="" />
          </div>
        </div>
      </div>
      <div className="container">
         <div className="row text-center mb-5">
          <div className="col">
            <img src="media\pressLogos.png" alt="" style={{width:"50%"}}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;
