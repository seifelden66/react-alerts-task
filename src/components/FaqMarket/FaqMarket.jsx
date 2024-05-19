import Arrow from "../icons/Arrow";
import "./FaqMarket.css";

export const FaqMarket = () => {
  return (
    <div>
      <div className="toggle">
        <div className="faqTitle">
          <Arrow />
          <h3>Market Cap</h3>
        </div>
      </div>

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
    </div>
  );
};
