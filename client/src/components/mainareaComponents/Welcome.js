import React, { Component } from "react";
import Oben from "../images/nachoben.png";
import { Link } from "react-router-dom";

export class Welcom extends Component {
  render() {
    return (
      <div className="welcome">
        <div className="headline">
          <span>Wilkommen bei Gilanis Homebar</span>
        </div>
        <div className="addcontainer">
          <span className="inhalttextCentriert">
            hier kannst du aus die Cocktails die sich auf unsere Seite befinden
            mit deiner eigene Vorstellung und Auswahlverfahren Rezepte suchen,
            diese nach bedarf auf dein Account speichern oder ausdrucken.
            <br />
            Zu dem kannst Du unter Menü interessante sachen rund um Cocktails
            finden.
            <br />
            Wir wünschen dir viel Spaß!
          </span>
          {/* <img src="http://localhost:5000/img/10A.JPG" alt="pic" /> */}
        </div>
        <div>
          <button className="bntgreen" type="submit">
            <Link to="/suche" className="Pagelink">
              Cocktail Generator
            </Link>
          </button>
        </div>
        {/* <a href="#top"> <img className="nachoben" src={Oben} alt="Nach oben" /></a> */}
      </div>
    );
  }
}

export default Welcom;
