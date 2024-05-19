// src/Nav/Nav.jsx
import "./Nav.css";
import Bell from "../icons/Bell";
import Search from "../icons/Search";
import Modal from "../Modal/Modal";
import { useState } from "react";
import PropTypes from "prop-types";

export const Nav = ({ onSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <nav>
      <div className="logo">
        <h3>ALERTS</h3>
      </div>
      <div className="search">
        <input
          className="in"
          placeholder="Search By Name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div className="searchIcon">
          <Search />
        </div>
      </div>
      <div className="noti">
        <div className="circle">6</div>
        <div className="bell">
          <Bell />
        </div>
      </div>
      <div className="filter">
        <button className="btnFilter" onClick={() => setIsOpen(true)}> Filter</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </nav>
  );
};

Nav.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
