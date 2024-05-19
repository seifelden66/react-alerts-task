// src/components/RightSide/RightSide.jsx
import { useState } from "react";
import IndustryFaq from "../Faq/IndustryFaq";
import Arrow from "../icons/Arrow";
import { MultiInput } from "../MultiInput";
import { Strategy } from "../Strategy/Strategy";
import Search from "../icons/Search";
import "./rightSide.css";

export const RightSide = ({ onFilterChange }) => {
  const [marketCap, setMarketCap] = useState(null);
  const [riskLevel, setRiskLevel] = useState(null);

  const handleMarketCapChange = (event) => {
    setMarketCap(event.target.value);
    onFilterChange({ marketCap: event.target.value, riskLevel });
  };

  const handleRiskLevelChange = (event) => {
    setRiskLevel(event.target.value);
    onFilterChange({ marketCap, riskLevel: event.target.value });
  };

  return (
    <div className="main cont">
      <h3>Filters</h3>
      <div className="filtersTitle">
        <h5>Filters Applied</h5>
        <p onClick={() => onFilterChange({ marketCap: null, riskLevel: null })}>
          Clear All
        </p>
      </div>
      <MultiInput />
      <div className="stock cont">
        <h4 id="tit">Stock</h4>
        <div className="search">
          <input placeholder="Search By..." />
          <div className="searchIcon">
            <Search />
          </div>
        </div>
        <IndustryFaq />
        <div className="besides">
          <div className="faq">
            <div className="faq-item">
              <div className="faq-question">
                <div className="title">
                  <Arrow />
                  <h4>Market Cap</h4>
                </div>
              </div>
              <div className="its">
                <div className="it">
                  <input
                    className="medium"
                    type="radio"
                    name="marketCap"
                    value="ABQQ"
                    onChange={handleMarketCapChange}
                  />
                  <label htmlFor="marketCap">ABQQ </label>
                </div>
                <div className="it">
                  <input
                    className="medium"
                    type="radio"
                    name="marketCap"
                    value="TSLA"
                    onChange={handleMarketCapChange}
                  />
                  <label htmlFor="marketCap">TSLA </label>
                </div>
                <div className="it">
                  <input
                    className="medium"
                    type="radio"
                    name="marketCap"
                    value="AMZN"
                    onChange={handleMarketCapChange}
                  />
                  <label htmlFor="marketCap">AMZN </label>
                </div>
                <div className="it">
                  <input
                    className="medium"
                    type="radio"
                    name="marketCap"
                    value="PYPL"
                    onChange={handleMarketCapChange}
                  />
                  <label htmlFor="marketCap">PYPL </label>
                </div>
              </div>
            </div>
          </div>
          <div className="faq">
            <div className="faq-item">
              <div className="faq-question">
                <div className="title">
                  <Arrow />
                  <h4>Risk Level</h4>
                </div>
              </div>
              <div className="its">
                <div className="it">
                  <input
                    className="medium"
                    type="radio"
                    name="riskLevel"
                    value="low"
                    onChange={handleRiskLevelChange}
                  />
                  <label htmlFor="riskLevel">Low</label>
                </div>

                <div className="it">
                  <input
                    className="medium"
                    type="radio"
                    name="riskLevel"
                    value="high"
                    onChange={handleRiskLevelChange}
                  />
                  <label htmlFor="riskLevel">High</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="besides">
          <Strategy />
          <Strategy />
        </div>
      </div>
      <div className="button">
        <button>click me</button>
      </div>
    </div>
  );
};
