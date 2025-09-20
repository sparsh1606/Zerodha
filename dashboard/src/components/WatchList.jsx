import React, { useState } from "react";
import { watchlist } from "../data/data.js";
import { Tooltip, Grow } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BarChartIcon from '@mui/icons-material/BarChart';
import { useContext } from "react";
import GeneralContext from "./GeneralContext";


const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, idx) => {
          return <WatchlistItem stock={stock} key={idx} />;
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchlistItem = ({ stock }) => {
  const [showActions, setShowActions] = useState(false);

  const handleMouseOver = () => {
    setShowActions(true);
  };
  const handleMouseOut = () => {
    setShowActions(false);
  };

  return (
    <li onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDownIcon className="down" />
          ) : (
            <KeyboardArrowUpIcon className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showActions && <Watchlistcompo uuid={stock.name} />}
    </li>
  );
};

const Watchlistcompo = ({ uuid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow();
  };
  return (
    <span className="actions">
      <span style={{display: 'flex', gap: '0.3rem', alignItems: 'center'}}>
        <Tooltip
          title="Buy(B)"
          placement="top"
          TransitionComponent={Grow}
          arrow
          onClick={handleBuyClick}
        >
          <button className="buy" >Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell(S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics(A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action"><BarChartIcon className="icon" /></button>
        </Tooltip>
      </span>
      <span>
        <Tooltip
          title="More"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action"><MoreHorizIcon className="icon" /></button>
        </Tooltip>
      </span>
    </span>
  );
};
