import { useState } from "react";
import Arrow from "../icons/Arrow";
import "./FaqMarket.css";

export const FaqMarket = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleAnswer = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`faqItem ${isActive ? "active" : ""}`}>
      <div className="toggle" onClick={toggleAnswer}>
        <div className="faqTitle">
          <Arrow />
          <h2>Market Cap</h2>
        </div>
      </div>
      {isActive && (
        <div className="radioItems">
          <div className="form-control">
            
            <input
              type="radio"
              id="Micro"
              name="radioGroup"
              value="Micro"
              className="radio-input"
            />
            <label htmlFor="Micro">Micro</label>
          </div>
          <div className="form-control">
            <input
              type="radio"
              id="Small"
              name="radioGroup"
              value="Small"
              className="radio-input"
            />
            <label htmlFor="Small">Small</label>
          </div>
          <div className="form-control">
            <input
              type="radio"
              id="Large"
              name="radioGroup"
              value="Large"
              className="radio-input"
            />
            <label htmlFor="Large">Large</label>
          </div>
        </div>
      )}
    </div>
  );
};
