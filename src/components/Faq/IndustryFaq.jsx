// src/components/Faq/Faq.jsx
import Arrow from "../icons/Arrow";
import Health from "../icons/Health";
import Material from "../icons/Materials";
import Electric from "../icons/Electric";

import "./faq.css";

const IndustryFaq = () => {
  return (
    <div className="faq">
      <div className="faq-item">
        <div className="faq-question">
          <div className="title">
            <Arrow />
            <h4>Industry</h4>
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default IndustryFaq;
