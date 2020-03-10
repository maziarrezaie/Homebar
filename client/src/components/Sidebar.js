import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

export class Sidebar extends Component {
  render() {
    return (
      <ul className="pagenav">
        <Link to="/welcome" className="Pagelink">
          <li className="nav-link">HOMEBAR</li>
        </Link>
        <Link to="/geschichte" className="Pagelink">
          <li className="nav-link">Geschichte des Cocktails</li>
        </Link>

        <Link to="/equipment" className="Pagelink">
          <li className="nav-link">Equipment für ein Haus-Bar</li>
        </Link>

        <Link to="/techniken" className="Pagelink">
          <li className="nav-link">Mix-Techniken</li>
        </Link>

        <li className="nav-link">Liste aller Cocktails</li>
        <li className="nav-link">Videos</li>
      </ul>
    );
  }
}

export default Sidebar;
