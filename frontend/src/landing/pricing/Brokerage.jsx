function Brokerage() {
  return (
    <div className="container p-5 mt-5 mb-5 ">
      <div className="row text-muted mb-5">
        <h3 className="mb-5">Charges explained</h3>
        <div className="col-6">
          <h5 className="mb-3 mt-3 fs-5">Securities/Commodities transaction tax</h5>
          <p className="mb-1 lh-base fs-6">
            Tax levied by the government when transacting on the exchanges.
            Charged as above on both buy and sell sides when trading equity
            delivery. Charged only on sell side when trading intraday or on F&O.
          </p>
          <p className="mb-1 lh-base fs-6">
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>

          <h5 className="mb-3 mt-3 fs-5">Transaction/Turnover Charges</h5>
          <p className="mb-1 lh-base fs-6">
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>
          <p className="mb-1 lh-base fs-6">
            NSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f.01.01.2016. (XC and XD groups have been
            merged into a new group X w.e.f 01.12.2017)
          </p>
          <p className="mb-1 lh-base fs-6">
            NSE has revised transaction charges in SS and ST groups to ₹10,000
            per crore of gross turnover.
          </p>
          <p className="mb-1 lh-base fs-6">
            BSE has revised transaction charges in group A, B and other
            non-exclusive groups (non-exclusive groups being groups E, F, G, GC,
            W, T) at ₹375 per crore of turnover on flat rate basis, effective
            December 1, 2022.
          </p>
          <p className="mb-1 lh-base fs-6">
            BSE has revised transaction charges in M, MT, TS and Z groups to
            ₹275 per crore of gross turnover.
          </p>

          <h5 className="mb-3 mt-3 fs-5">Call & trade</h5>
          <p className="mb-1 lh-base fs-6">
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including auto square off orders.
          </p>

          <h5 className="mb-3 mt-3 fs-5">Stamp charges</h5>
          <p className="mb-1 lh-base fs-6">
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>

          <h5 className="mb-3 mt-3 fs-5">NRI brokerage charges</h5>
          <ul className="mb-1 lh-base fs-6">
            <li>₹100 per order for futures and options.</li>
            <li>
              For a non-PIS account, 0.5% or ₹100 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              For a PIS account, 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              ₹500 + GST as yearly account maintenance charges (AMC) charges.
            </li>
          </ul>

          <h5 className="mb-3 mt-3 fs-5">Account with debit balance</h5>
          <p className="mb-1 lh-base fs-6">
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20 per executed order.
          </p>

          <h5 className="mb-3 mt-3 fs-5">Charges for Investor’s Protection Fund Trust (IPFT) by NSE</h5>
          <ul className="mb-1 lh-base fs-6">
            <li>
              Equity and Futures - ₹10 per crore + GST of the traded value.
            </li>
            <li>Options - ₹50 per crore + GST of premium value.</li>
            <li>
              Currency - ₹0.05 per lakh of turnover for Futures and ₹2 per lakh
              + GST of premium for Options.
            </li>
          </ul>

          <h5 className="mb-3 mt-3 fs-5">Margin Trading Facility (MTF)</h5>
          <ul className="mb-1 lh-base fs-6">
            <li>
              MTF Interest: 0.04% per day or 18% p.a. on funded amount. The
              interest is applied from T+1 day until the MTF stocks are sold.
            </li>
            <li>
              MTF Brokerage: 0.03% or ₹20 per executed order, whichever is
              lower.
            </li>
            <li>
              MTF pledge charge: ₹15 + GST per pledge and unpledge request per
              ISIN.
            </li>
          </ul>
        </div>
        <div className="col-6">
          <h5 className="mb-3 mt-3 fs-5">GST</h5>
          <p className="mb-1 lh-base fs-6">
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges + transaction charges )
          </p>

          <h5 className="mb-3 mt-3 fs-5">SEBI Charges</h5>
          <p className="mb-1 lh-base fs-6">
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.
          </p>

          <h5 className="mb-3 mt-3 fs-5">DP (Depository participant) charges</h5>
          <p className="mb-1 lh-base fs-6">
            ₹15.34 per scrip (₹13.5 CDSL fee + ₹0.5 Zerodha fee + ₹1.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity.
          </p>
          <p className="mb-1 lh-base fs-6">
            Female demat account holders (as first holder) will enjoy a discount
            of ₹0.25 per transaction on the CDSL fee.
          </p>
          <p className="mb-1 lh-base fs-6">
            Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL fee.
          </p>

          <h5 className="mb-3 mt-3 fs-5">Pledging charges</h5>
          <p className="mb-1 lh-base fs-6">₹30 + GST per pledge request per ISIN.</p>

          <h5 className="mb-3 mt-3 fs-5">AMC (Account maintenance charges)</h5>
          <p className="mb-1 lh-base fs-6">
            For BSDA demat account: Zero charges if the holding value is less
            than ₹4,00,000.
          </p>
          <p className="mb-1 lh-base fs-6">
            For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
            (90 days).
          </p>

          <h5 className="mb-3 mt-3 fs-5">Corporate action order charges</h5>
          <p className="mb-1 lh-base fs-6">
            ₹20 plus GST will be charged for GMS / buyback / takeover /
            delistings orders placed through Console.
          </p>

          <h5 className="mb-3 mt-3 fs-5">Off-market transfer charges</h5>
          <p className="mb-1 lh-base fs-6">₹25 per transaction.</p>

          <h5 className="mb-3 mt-3 fs-5">Physical CMR request</h5>
          <p className="mb-1 lh-base fs-6">
            First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for
            subsequent requests.
          </p>

          <h5 className="mb-3 mt-3 fs-5">Payment gateway charges</h5>
          <p className="mb-1 lh-base fs-6">₹9 + GST (Not levied on transfers done via UPI)</p>

          <h5 className="mb-3 mt-3 fs-5">Delayed Payment Charges</h5>
          <p className="mb-1 lh-base fs-6">
            Interest is levied at 18% a year or 0.05% per day on the debit
            balance in your trading account.
          </p>

          <h5 className="mb-3 mt-3 fs-5">Trading using 3-in-1 account with block functionality</h5>
          <ul className="mb-1 lh-base fs-6">
            <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
            <li>Intraday Brokerage: 0.05% per executed order.</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <h3 className="fs-5 mb-3 text-muted">Disclaimer</h3>
        <p className="text-muted fs-6">
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All
          statutory and regulatory charges will be levied at actuals. Brokerage
          is also charged on expired, exercised, and assigned options contracts.
          Free investments are available only for our retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
        </p>
      </div>
    </div>
  );
}
export default Brokerage;
