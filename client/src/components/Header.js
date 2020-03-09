import React, { Component } from "react";
import Logo from "./images/Homebar-logo-600px72.png";
import "../App.css";

export class Header extends Component {
  render() {
    return (
      <div id="hl">
        <img className="hblogo" src={Logo} alt="Homebar Logo" />
        <button type="submit" className="linkeins">
          LOGIN
        </button>
        <div className="redlinetop"></div>
      </div>
    );
  }
}

export default Header;
