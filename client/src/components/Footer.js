import React, { Component } from "react";
import Mail from "./images/email.png";
import Insta from "./images/insta.png";
import Face from "./images/facebook.png";
import "../App.css";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="redline"></div>

        <div className="socialnet">
          <a href="mailto:mail@gilanis.de">
            <img className="footicon" src={Mail} alt="E-Mail" />
          </a>
          <a href="https://www.instagram.com/tayo_no_hikari/?hl=de">
            <img className="footicon" src={Insta} alt="Instergram" />
          </a>
          <a href="https://www.instagram.com/tayo_no_hikari/?hl=de">
            <img className="footicon" src={Face} alt="Facebook" />
          </a>
        </div>
        <div className="footlinkbox">
          <span>Impressum</span>
          <br></br>
          <span>Datenschutz</span>
        </div>
      </div>
    );
  }
}

export default Footer;
