// src/components/HomePage/Home.page.jsx
import { useState } from "react";
import Alerts from "../Alerts/Alerts";
import { Nav } from "../Nav/Nav";
import { RightSide } from "../RightSide/RightSide";
import { Left } from "../Left/Left";
import "./home.css";

export const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({ marketCap: null, riskLevel: null });

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  return (
    <div className="page">
      <div className="left">
        <Left />
      </div>
      <div className="cont">
        <Nav onSearch={handleSearch} />
        <Alerts searchQuery={searchQuery} filters={filters} />
      </div>
      <div className="right">
        <RightSide onFilterChange={handleFilterChange} />
      </div>
    </div>
  );
};
