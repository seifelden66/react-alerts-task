// src/components/Modal/Modal.jsx
import { useState } from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";
import "./modal.css";
import { RightSide } from "../RightSide/RightSide";

export default function Modal({ open, onClose, onApplyFilters }) {
  const [filters, setFilters] = useState({
    marketCap: null,
    riskLevel: null,
    industries: [],
  });

  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  const handleApplyFilters = (appliedFilters) => {
    onApplyFilters(appliedFilters);
    onClose();
  };

  if (!open) return null;

  return ReactDom.createPortal(
    <div className="modal">
      <div className="content">
        <button onClick={onClose} className="close">x</button>
        <div className="con">
          <RightSide 
            onFilterChange={handleFilterChange} 
            currentFilters={filters} 
            onApplyFilters={handleApplyFilters}
          />
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

Modal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onApplyFilters: PropTypes.func.isRequired,
};
