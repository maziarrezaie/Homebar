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
            <img className="footicon" src={Mail} alt="E-Mail" alt="E-Mail" />
          </a>
          <a
            href="https://www.instagram.com/tayo_no_hikari/?hl=de"
            target="_blank"
          >
            <img className="footicon" src={Insta} alt="Instergram" />
          </a>
          <a
            href="https://www.instagram.com/tayo_no_hikari/?hl=de"
            target="_blank"
          >
            <img className="footicon" src={Face} alt="Facebook" />
          </a>
        </div>
        <div className="footlink">
          <p className="linkfooter">Impressum</p>
          <p className="linkfooter">Datenschutz</p>
        </div>
      </div>
    );
  }
}

export default Footer;
