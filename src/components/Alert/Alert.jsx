//src/components/Alert/Alert.jsx
import Menu from "../icons/Money";
import Risk from "../icons/Risk";
import Shares from "../icons/Shares";
import Ticker from "../icons/Ticker";
import "./alert.css";
import PropTypes from "prop-types";
import { useState } from "react";

const Alert = ({ stock }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setShowDescription(!showDescription);
    setIsSelected(!isSelected);
  };

  return (
    <>
      <div
        className={`alert ${isSelected ? "selected" : ""}`}
        onClick={handleClick}
      >
        <div className="alertItem">
          <Ticker /> {stock.ticker}
        </div>
        <div className="bord"></div>
        <div className="alertItem">
          <Shares /> {stock.shares}
        </div>
        <div className="bord"></div>
        <div className="alertItem">
          <Menu />
          <span style={{ color: stock.change < 0 ? "red" : "green" }}>
            {stock.change}
          </span>
        </div>
        <div className="bord"></div>
        <div className="alertItem">
          <Risk /> {stock.riskLevel}
        </div>
      </div>
      {showDescription && (
        <div className="desc">
          <b>{stock.ticker}</b> just announced an acquisition of <b>LOREM</b>
          at 200B$. <br />
          this is an <span className="lin">arbitrage opportunity</span>, with
          max gain
          {stock.description}
        </div>
      )}
    </>
  );
};

Alert.propTypes = {
  stock: PropTypes.shape({
    ticker: PropTypes.string,
    shares: PropTypes.number,
    change: PropTypes.number,
    riskLevel: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Alert;
