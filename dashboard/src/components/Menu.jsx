import React, {useState} from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectMenue, setSelectMenue] = useState(0);

  const handleMenuClick = (index) => {
    setSelectMenue(index);
  };
  const menuClass = "menu";
  const selectMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="https://github.com/apna-college/Zerodha/blob/main/dashboard/public/logo.png?raw=true" style={{ width: "30px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link to="/" onClick={() => handleMenuClick(0)} style={{ textDecoration: 'none'}}>  
              <p className={selectMenue==0 ? selectMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/orders" onClick={() => handleMenuClick(1)} style={{ textDecoration: 'none'}}>  
              <p className={selectMenue==1 ? selectMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link to="/holdings" onClick={() => handleMenuClick(2)} style={{ textDecoration: 'none'}}>  
              <p className={selectMenue==2 ? selectMenuClass : menuClass}>Holdings</p>
            </Link>
            
          </li>
          <li>
            <Link to="/positions" onClick={() => handleMenuClick(3)} style={{ textDecoration: 'none'}}>  
              <p className={selectMenue==3 ? selectMenuClass : menuClass}>Positions</p>
            </Link>
            
          </li>
          <li>
            <Link to="/funds" onClick={() => handleMenuClick(4)} style={{ textDecoration: 'none'}}>  
              <p className={selectMenue==4 ? selectMenuClass : menuClass}>Funds</p>
            </Link>
            
          </li>
          <li>
            <Link to="/apps" onClick={() => handleMenuClick(5)} style={{ textDecoration: 'none'}}>  
              <p className={selectMenue==5 ? selectMenuClass : menuClass}>Apps</p>
            </Link>
            
          </li>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
