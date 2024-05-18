import { Alerts } from "../icons/Alerts";
import { Training } from "../icons/Training";
import { Automation } from "../icons/Automation";

import { Portfolio } from "../icons/Portfolio";

import { Trading } from "../icons/Trading";

import "./left.css";
import { Logo } from "../icons/Logo";
import { Person } from "../icons/Person";
export const Left = () => {
  return (
    <div className="side">
      <div className="logoImg">
        <Logo className="log"/>
      </div>
      <div className="items">
        <div className="item">
          <Alerts />
          <h4 className="whiten hid">Alerts</h4>
        </div>
        <div className="item">
          <Training />
          <h4 className="whiten hid">Training</h4>
        </div>
        <div className="item">
          <Automation />
          <h4 className="hid">Automation</h4>
        </div>
        <div className="item">
          <Portfolio />
          <h4 className="hid">Portfolio</h4>
        </div>
        <div className="item">
          <Trading />
          <h4 className="hid">Trading</h4>
        </div>

        <div className="btm">
          <div className="info">
            <Person />
            <div className="streamer-name hid">
              <h4>Moni Roy</h4>
              <p>Beginner</p>
            </div>
          </div>
          <p className="btmbtm hid">Street Suit. 2.0</p>
        </div>
      </div>
    </div>
  );
};
