import {Link} from "react-router-dom";
function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-white ">
        <div className="container p-2">
          <Link className="navbar-brand " to='/' style={{marginRight: "40rem", width: "10%"}}>
            <img src="\media\logo.svg" alt="logo" style={{width:"100%"}}/>
          </Link>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-muted links" aria-current="page" to='/signup' >
                  Signup
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active text-muted links" aria-current="page" to='/about' >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active text-muted links" aria-current="page" to='/product' >
                  Product
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active text-muted links" aria-current="page" to='/pricing' >
                  Pricing
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active text-muted links" aria-current="page" to='/support' >
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
