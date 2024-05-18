import "./Nav.css";
import Bell from "../icons/Bell";
import Search from "../icons/Search";

export const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <h1>ALERTS</h1>
      </div>
      <div className="search">
        <input className="in" placeholder="Serach By..." />
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
    </nav>
  );
};
