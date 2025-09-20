import ArrowBtn from "../ArrowBtn";
function Hero(){
    return (
        <>
            <div className="container p-5 mt-5 mb-5 ">
                <div className="row text-center">
                    <div className="col">
                        <h1 className="mt-5 fs-3">Zerodha Products</h1>
                        <p className="fs-4 text-muted">Sleek, modern, and intuitive trading platforms</p>
                        <p>Check out our <ArrowBtn title="investment offerings" link="#"/></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Hero;