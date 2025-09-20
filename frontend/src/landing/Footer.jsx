function Footer() {
  return (
    <>
      <div
        className="container-fluid border-top"
        style={{ backgroundColor: "#fafafb", padding: "20px" }}
      >
        <div className="row">
          <div className="col ms-5 mt-3 text-muted ">
            <img src="media\logo.svg" alt="" style={{ width: "50%" }} />
            <p className="mt-1">© 2010 - 2025, Zerodha Broking Ltd.</p>
            <p className="mt-1">All rights reserved.</p>

            <i className="fa-brands fa-x-twitter me-3 p-2"></i>
            <i className="fa-brands fa-square-facebook me-3 p-2"></i>
            <i className="fa-brands fa-square-instagram me-3 p-2"></i>
            <i className="fa-brands fa-linkedin me-3 p-2"></i>
            <div className="border-top">
              <i className="fa-brands fa-youtube me-3 p-2"></i>
              <i className="fa-brands fa-whatsapp me-3 p-2"></i>
              <i className="fa-brands fa-telegram me-3 p-2"></i>
            </div>
          </div>
          <div className="col footer-links">
            <h4 className="fs-5 mt-3 ps-4 mb-3">Account</h4>
            <ul>
              <li>Open demat account</li>
              <li>Minor demat account</li>
              <li>NRI demat account</li>
              <li>Commodity</li>
              <li>Dematerialisation</li>
              <li>Fund transfer</li>
              <li>MTF</li>
              <li>Referral program</li>
            </ul>
          </div>
          <div className="col footer-links">
            <h4 className="fs-5 mt-3 ps-4 mb-3">Support</h4>
            <ul>
              <li>Contact us</li>
              <li>Support portal</li>
              <li>How to file a complaint?</li>
              <li>Status of your complaints</li>
              <li>Bulletin</li>
              <li>Circular</li>
              <li>Z-Connect blog</li>
              <li>Downloads</li>
            </ul>
          </div>
          <div className="col footer-links">
            <h4 className="fs-5 mt-3 ps-4 mb-3">Company</h4>
            <ul>
              <li>About</li>
              <li>Philosophy</li>
              <li>Press & media</li>
              <li>Careers</li>
              <li>Zerodha Cares (CSR)</li>
              <li>Zerodha.tech</li>
              <li>Open source</li>
            </ul>
          </div>
          <div className="col footer-links">
            <h4 className="fs-5 mt-3 ps-4 mb-3">Quick links</h4>

            <ul>
              <li>Upcoming IPOs</li>
              <li>Brokerage charges</li>
              <li>Market holidays</li>
              <li>Economic calendar</li>
              <li>Calculators</li>
              <li>Markets</li>
              <li>Sectors</li>
            </ul>
          </div>
        </div>
        <div
          className="row text-muted mt-4 mb-3"
          style={{ fontSize: "0.8rem" }}
        >
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd.–SEBI Registration no.: IN-DP-431-2019 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            India's largest broker based on networth as per NSE. NSE broker
            factsheet
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
        <div
          className="row text-muted text-center"
          style={{ fontSize: "0.8rem", fontWeight: "bold" }}
        >
          <div className="col">
            <p>NSE</p>
          </div>
          <div className="col">
            <p>BSE</p>
          </div>
          <div className="col">
            <p>MCX</p>
          </div>
          <div className="col">
            <p>Terms & conditions</p>
          </div>
          <div className="col">
            <p>Policies & procedures</p>
          </div>
          <div className="col">
            <p>Privacy policy</p>
          </div>
          <div className="col">
            <p>Disclosure</p>
          </div>
          <div className="col">
            <p>For investor's attention</p>
          </div>
          <div className="col">
            <p>Investor charter</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
