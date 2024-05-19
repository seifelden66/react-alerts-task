// src/components/RightSide/RightSide.jsx
import { useState, useEffect } from "react";
import IndustryFaq from "../Faq/IndustryFaq";
import Arrow from "../icons/Arrow";
import { MultiInput } from "../MultiInput";
import { Strategy } from "../Strategy/Strategy";
import Search from "../icons/Search";
import "./rightSide.css";
import PropTypes from "prop-types";

export const RightSide = ({
  onFilterChange,
  currentFilters,
  onApplyFilters,
  onSearch
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const [localMarketCap, setLocalMarketCap] = useState(null);
  const [localRiskLevel, setLocalRiskLevel] = useState(null);
  const [localIndustries, setLocalIndustries] = useState([]);

  useEffect(() => {
    if (currentFilters) {
      setLocalMarketCap(currentFilters.marketCap);
      setLocalRiskLevel(currentFilters.riskLevel);
      setLocalIndustries(currentFilters.industries);
    }
  }, [currentFilters]);

  const handleMarketCapChange = (event) => {
    setLocalMarketCap(event.target.value);
  };

  const handleRiskLevelChange = (event) => {
    setLocalRiskLevel(event.target.value);
  };

  const handleIndustryChange = (selectedIndustries) => {
    setLocalIndustries(selectedIndustries);
  };
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleApplyFilters = () => {
    const filters = {
      marketCap: localMarketCap,
      riskLevel: localRiskLevel,
      industries: localIndustries,
    };
    onFilterChange(filters);
    onApplyFilters(filters);
  };

  const handleClearFilters = () => {
    setLocalMarketCap(null);
    setLocalRiskLevel(null);
    setLocalIndustries([]);
    onFilterChange({
      marketCap: null,
      riskLevel: null,
      industries: [],
    });
  };

  return (
    <div className="main cont">
      <h3>Filters</h3>
      <div className="filtersTitle">
        <h5>Filters Applied</h5>
        <p className="botn" onClick={handleClearFilters}>
          Clear All
        </p>
      </div>
      <MultiInput onIndustryChange={handleIndustryChange} />
      <div className="stock cont">
        <h4 id="tit">Stock</h4>
        <div className="search">
          <input
          style={{color:"white"}}
            placeholder="Search By..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
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
                    checked={localMarketCap === "ABQQ"}
                    onChange={handleMarketCapChange}
                  />
                  <label htmlFor="marketCap">ABQQ</label>
                </div>
                <div className="it">
                  <input
                    className="medium"
                    type="radio"
                    name="marketCap"
                    value="TSLA"
                    checked={localMarketCap === "TSLA"}
                    onChange={handleMarketCapChange}
                  />
                  <label htmlFor="marketCap">TSLA</label>
                </div>
                <div className="it">
                  <input
                    className="medium"
                    type="radio"
                    name="marketCap"
                    value="AMZN"
                    checked={localMarketCap === "AMZN"}
                    onChange={handleMarketCapChange}
                  />
                  <label htmlFor="marketCap">AMZN</label>
                </div>
                <div className="it">
                  <input
                    className="medium"
                    type="radio"
                    name="marketCap"
                    value="PYPL"
                    checked={localMarketCap === "PYPL"}
                    onChange={handleMarketCapChange}
                  />
                  <label htmlFor="marketCap">PYPL</label>
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
                    checked={localRiskLevel === "low"}
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
                    checked={localRiskLevel === "high"}
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
        <button onClick={handleApplyFilters}>Apply</button>
      </div>
    </div>
  );
};

RightSide.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  currentFilters: PropTypes.shape({
    marketCap: PropTypes.string,
    riskLevel: PropTypes.string,
    industries: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onApplyFilters: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};
