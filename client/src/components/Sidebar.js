import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

export class Sidebar extends Component {
  render() {
    return (
      <ul className="pagenav">
        <li className="nav-link">
          <Link to="/geschichte" className="Pagelink">
            Geschichte des Cocktails
          </Link>
        </li>
        
        <Link to="/equipment" className="Pagelink">
        <li className="nav-link">
        Equipment {/* für ein Haus-Bar */}
        </li>
        </Link>
          
        <li className="nav-link">
          <Link to="/techniken" className="Pagelink">
            Mix-Techniken
          </Link>
        </li>
        <li className="nav-link">Liste aller Cocktails</li>
        <li className="nav-link">Videos</li>
      </ul>
    );
  }
}

export default Sidebar;
