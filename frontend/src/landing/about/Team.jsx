function Team() {
  return (
    <div className="container p-5 mt-5 mb-5 ">
      <div className="row">
        <div className="col-6">
            <img src="media\nithinKamath.jpg" alt="nitin" className="rounded-circle team-photo" />
            <h6 className="text-center team-txt">Nithin Kamath</h6>
            <p className="text-center team-txt text-muted ">Founder, CEO</p>
        </div>
        <div className="col-6">
          <h3 className="mb-5 p-2">People</h3>
          <p className="text-muted mb-4">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className="text-muted mb-4">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="text-muted mb-4">Playing basketball is his zen.</p>
        </div>
      </div>
    </div>
  );
}
export default Team;
