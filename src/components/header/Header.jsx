import React from "react";
import "./Header.css";
import irctc_logo from "../../assets/irctc_logo.png";
import irctc from "../../assets/irctc2.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={irctc_logo} alt="irctc_logo" className="irlogo" />
      </div>
      <div className="logo">
        <div>
          <img src={irctc} alt="logo" className="irlogo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
