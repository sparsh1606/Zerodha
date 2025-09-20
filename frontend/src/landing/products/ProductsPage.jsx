import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        title="Kite"
        image="media\kite.png"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
      />
      <RightSection
        title="Console"
        image="media\console.png"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
      />
      <LeftSection
        title="Coin"
        image="media\coin.png"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
      />
      <RightSection
        title="Kite Connect API"
        image="media\kiteconnect.png"
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
      />
      <LeftSection
        title="Varsity mobile"
        image="media\varsity.png"
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
      />
      <div className="container p-5 mt-5 mb-5 text-center">
        <div className="row">
          <p className="fs-4 text-muted mb-5 ">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
        </div>
      </div>
      <Universe/>
    </>
  );
}
export default ProductsPage;
