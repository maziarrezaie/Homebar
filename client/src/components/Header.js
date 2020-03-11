import React, { Component } from "react";
import Logo from "./images/Homebar-logo-600px72.png";
import "../App.css";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/welcome">
          <img className="hblogo" src={Logo} alt="Homebar Logo" />
        </Link>

        <Link className="linkeins" to="/loginform">
          LOGIN
        </Link>

        <Link className="linkeins" to="/register">
          Neu bei HOMEBAR?
        </Link>

        {/* <div className="redlinetop"></div> */}
      </div>
    );
  }
}

export default Header;
