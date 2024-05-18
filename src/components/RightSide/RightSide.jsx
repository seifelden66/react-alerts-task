import IndustryFaq from "../Faq/IndustryFaq";
import { FaqMarket } from "../FaqMarket/FaqMarket";
import { FaqRisk } from "../FaqRisk/FaqRisk";

import { MultiInput } from "../MultiInput";
import { Strategy } from "../Strategy/Strategy";
import Search from "../icons/Search";
import "./rightSide.css";

export const RightSide = () => {
  return (
    <div className="main cont">
      <h1>Filters</h1>
      <div className="filtersTitle">
        <h4>Filters Apllied</h4>
        <p>Clear All</p>
      </div>
      <MultiInput />
      <div className="stock cont">
        <h1 style={{ textAlign: "center" }}>Stock</h1>
        <div className="search">
          <input placeholder="Serach By..." />
          <div className="searchIcon">
            <Search />
          </div>
        </div>
        <IndustryFaq />
        <div className="besides">
          <FaqMarket />
          <FaqRisk />
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
