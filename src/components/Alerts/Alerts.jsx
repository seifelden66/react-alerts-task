// src/components/Alerts/Alerts.jsx
import { useEffect, useState } from "react";
import Alert from "../Alert/Alert";
import stocksData from "../../db.json";
import "./alerts.css";
import PropTypes from "prop-types";

const Alerts = ({ searchQuery, filters }) => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    setStocks(stocksData.stocks);
  }, []);

  const filteredStocks = stocks.filter((stock) => {
    const matchesSearch = stock.ticker.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRiskLevel = filters.riskLevel ? stock.riskLevel === filters.riskLevel : true;
    const matchesMarketCap = filters.marketCap ? stock.ticker === filters.marketCap : true;
    const matchesIndustry = filters.industries.length > 0 ? filters.industries.includes(stock.industry.toLowerCase()) : true;
    return matchesSearch && matchesRiskLevel && matchesMarketCap && matchesIndustry;
  });

  return (
    <div className="cards">
      {filteredStocks.map((stock, index) => (
        <Alert key={index} stock={stock} />
      ))}
    </div>
  );
};

Alerts.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  filters: PropTypes.shape({
    riskLevel: PropTypes.string,
    marketCap: PropTypes.string,
    industries: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Alerts;
