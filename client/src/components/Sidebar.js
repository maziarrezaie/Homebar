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
        <Link to="/suche" className="Pagelink">
          <li className="nav-link">Cocktail Generator</li>
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
        <Link to="/liste" className="Pagelink">
          <li className="nav-link">Liste aller Cocktails</li>
        </Link>
        <Link to="/videos" className="Pagelink">
          <li className="nav-link">Videos</li>
        </Link>
      </ul>
    );
  }
}

export default Sidebar;
