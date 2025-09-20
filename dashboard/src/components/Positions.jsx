import React, {useState, useEffect} from "react";
import axios from "axios";

const Positions = () => {

  const [positions, setPositions] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3002/allPositions").then((res) => {
      setPositions(res.data);
    })
  }, []);



  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {positions.map((stock, idx) => {
            const curValue = (stock.qty * stock.price).toFixed(2);
            const isProfit = curValue - stock.qty * stock.avg >= 0;
            const profitClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={idx}>
                <td>{stock.product}</td>
                <td>{stock.name}.</td>
                <td>{stock.qty}.</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profitClass}>
                  {(curValue - stock.qty * stock.avg).toFixed(2)}
                </td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
