function Hero() {
  return (
    <>
      <div className="container p-5 mt-5 mb-5">

        <div className="row text-center">
          <img src="media/homeHero.png" alt="Hero Image" style={{width:"70%", margin:"auto"}}/>
          <h1 className="mt-5 fs-3" style={{color:"#414141"}}>Invest in everything</h1>
          <p className="mt-3 fs-4" style={{color:"#5e5e5e"}}>
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </p>
          <button className="p-2 btn fs-5 mb-5 mt-3" style={{ width: "20%", margin: "0 auto", backgroundColor:"#387ed1", color:"white"}}>Sign up for free</button>

        </div>
      </div>

      
    </>
  );
}

export default Hero;