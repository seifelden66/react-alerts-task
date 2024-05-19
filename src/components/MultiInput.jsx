// src/components/MultiInput.jsx
import { useState } from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const options = [
  { value: "real estate", label: "Real Estate" },
  { value: "industrial", label: "Industrial" },
  { value: "it", label: "IT" },
  { value: "health", label: "Health" },
  { value: "materials", label: "Materials" },
  { value: "energy", label: "Energy" },
];

const customStyles = {
  control: (styles) => ({
    ...styles,
    width: "100%",
    height: 10,
    backgroundColor: "#292524",
    border: "none",
  }),
  option: (styles) => {
    return { ...styles, color: "#292524" };
  },
  multiValue: (provided) => {
    return { ...provided, backgroundColor: "#007bff" };
  },
  multiValueLabel: (provided) => ({
    ...provided,
    color: "#fff",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "#fff",
    ":hover": {
      backgroundColor: "#0056b3",
      color: "#fff",
    },
  }),
};

export const MultiInput = ({ onIndustryChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
    onIndustryChange(selected.map(option => option.value));
  };

  return (
    <div className="main cont">
      <Select
        isMulti
        value={selectedOptions}
        onChange={handleChange}
        options={options}
        className="tag-input"
        classNamePrefix="select"
        styles={customStyles}
      />
    </div>
  );
};

MultiInput.propTypes = {
  onIndustryChange: PropTypes.func.isRequired,
};
