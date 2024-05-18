// src/components/Faq/Faq.jsx
import { useState } from "react";
import Arrow from "../icons/Arrow";
import Health from "../icons/Health";
import Material from "../icons/Materials";
import Electric from "../icons/Electric";

import "./faq.css";

const IndustryFaq = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleAnswer = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="faq">
      <div className="faq-item">
        <div className="faq-question" onClick={toggleAnswer}>
          <div className="title">
            <Arrow />
            <h2>Industry</h2>
          </div>
        </div>
        {isActive && (
          <div className="grid">
            <div className="gridSection">
              <div className="sectionItem">
                <Health />
                <p>Health Care</p>
              </div>
              <div className="sectionItem">
                <Material />
                <p>Materials</p>
              </div>
              <div className="sectionItem">
                <Electric />
                <p>Energy</p>
              </div>
              <div className="sectionItem">
                <Health />
                <p>Consumer stables</p>
              </div>
              <div className="sectionItem">
                <Health />
                <p>Real estate</p>
              </div>
            </div>
            <div className="gridSection">
              {" "}
              <div className="sectionItem">
                <Health />
                <p>Health Care</p>
              </div>
              <div className="sectionItem">
                <Material />
                <p>Materials</p>
              </div>
              <div className="sectionItem">
                <Electric />
                <p>Energy</p>
              </div>
              <div className="sectionItem">
                <Health />
                <p>Consumer stables</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IndustryFaq;
