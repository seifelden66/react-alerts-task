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
          <h5 className="whiten hid">Alerts</h5>
        </div>
        <div className="item">
          <Training />
          <h5 className="whiten hid">Training</h5>
        </div>
        <div className="item">
          <Automation />
          <h5 className="hid">Automation</h5>
        </div>
        <div className="item">
          <Portfolio />
          <h5 className="hid">Portfolio</h5>
        </div>
        <div className="item">
          <Trading />
          <h5 className="hid">Trading</h5>
        </div>

        <div className="btm">
          <div className="info">
            <Person />
            <div className="streamer-name hid">
              <h5>Moni Roy</h5>
              <p>Beginner</p>
            </div>
          </div>
          <p className="btmbtm hid">Street Suit. 2.0</p>
        </div>
      </div>
    </div>
  );
};
