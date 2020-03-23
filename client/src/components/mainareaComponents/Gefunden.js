import React, { Component } from "react";
import Oben from "../images/nachoben.png";
import Pic from "../images/gallerieCosmopolitan.png";
import Pic2 from "../images/galleriePicasso.png";
import { Link } from "react-router-dom";

export class Welcom extends Component {
  render() {
    return (
      <div className="welcome">
        <div className="headline">
          <span>gefundene Cocktails</span>
        </div>
        <div className="gefundenpics" id="gfpics">
          {/* <img className="thumbpic" src={Pic} alt="Thumb" />
          <img className="thumbpic" src={Pic2} alt="Thumb" />
          <img className="thumbpic" src={Pic} alt="Thumb" />
          <img className="thumbpic" src={Pic2} alt="Thumb" /> */}
        </div>

        <div className="ergiebnisres">
          {/* <img className="auwpicres" id="awpic" src={Pic} alt="Thumb" /> */}
          <span className="rezeptrespons" id="rezres">
            {/* 
            Text von rezept<br></br>Text von rezept<br></br>Text von rezept
            <br></br>Text von rezept<br></br>Text von rezept<br></br>Text von
            rezept<br></br>Text von rezept<br></br> */}
          </span>
        </div>

        <button className="bntgreen" type="submit">
          <Link to="/suche" className="Pagelink">
            Zurück zu Suche
          </Link>
        </button>
        <br></br>

        <a href="#top">
          {" "}
          <img className="nachoben" src={Oben} alt="Nach oben" />
        </a>
      </div>
    );
  }
}

export default Welcom;
