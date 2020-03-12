import React, { Component } from "react";
import Oben from "../images/nachoben.png";
import { Link } from "react-router-dom";

export class Liste extends Component {
  render() {
    return (
      <div className="welcome">
        <div className="headline">
          <span>Liste der alle rezepte auf HOMEBAR</span>
        </div>
        <button className="cg" type="submit">
            <Link to="/suche" className="Pagelink">
              Cocktail Generator
            </Link>
          </button>
        <div>
        <span className="inhalttextLinks" id="liste">
          NOCH LEER
         
        </span>
        </div>
        <a href="top">
          <img className="nachoben" src={Oben} alt="Nach oben" />
        </a>
      </div>
    );
  }
}

export default Liste;
