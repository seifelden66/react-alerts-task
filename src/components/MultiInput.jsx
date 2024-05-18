import { useState } from "react";

import Select from "react-select";
const options = [
  { value: "Real satate", label: "Real satate" },
  { value: "Investmen", label: "Investmen" },
  { value: "Building", label: "Building" },
];
const customStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "#292524",
    paddingBottom:"10px",
    border:"none",
    width:'100%'
  }),
  option: (styles) => {
    return { ...styles, color: "#292524" };
  },
  multiValue: (provided) => {
    return{ ...provided,        backgroundColor: "#007bff"}
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
export const MultiInput = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
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
