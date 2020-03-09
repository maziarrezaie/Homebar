import React, { Component } from "react";
import Oben from "../images/nachoben.png";
import { Link } from "react-router-dom";



const axios = require("axios");
export class Suche extends Component {
  state = {
    answers: {
      staerke: "",
      geschmack: "",
      basis: "",
      size: ""
    }
  };
  setAnswers = e => {
    this.setState({
      answers: {
        ...this.state.answers,
        [e.target.name.split("_")[0]]: e.target.name.split("_")[1]
      }
    });
  };

  getDrinks = () => {
    axios
      .get("http://localhost:5000/drinks/filter", this.state.answers)
      .then(res => {
        console.log(res);
      });
  };

  render() {
    return (
      <div className="welcome">
        <div className="headline">
          <span>Suche nach deine Vorstellung</span>
        </div>

        <p className="inhalttextCentriert">Wie soll der Cocktail sein?</p>

        <button className="bntw" type="text">
          Stärke:
        </button>
        <br></br>
        <button
          onClick={this.setAnswers}
          className="bntred"
          type="submit"
          name="staerke_0%ig"
        >
          0%ig
        </button>
        <button
          onClick={this.setAnswers}
          className="bntred"
          type="submit"
          name="staerke_licht"
        >
          Leicht
        </button>
        <button
          onClick={this.setAnswers}
          className="bntred"
          type="submit"
          name="staerke_stark"
        >
          Stark
        </button>
        <button
          onClick={this.setAnswers}
          className="bntred"
          type="submit"
          name="staerke_extraStark"
        >
          Extra-Stark
        </button>
        <br></br>

        <button className="bntw" type="text">
          Geschmack:
        </button>
        <br></br>
        <button
          onClick={this.setAnswers}
          className="bntred"
          type="submit"
          name="geschmack_cremig"
        >
          Cremig
        </button>
        <button
          onClick={this.setAnswers}
          className="bntred"
          type="submit"
          name="geschmack_fruchtig"
        >
          Fruchtig
        </button>
        <button
          onClick={this.setAnswers}
          className="bntred"
          type="submit"
          name="geschmack_suess"
        >
          Süss
        </button>
        <button
          onClick={this.setAnswers}
          className="bntred"
          type="submit"
          name="geschmack_sauer"
        >
          Sauer
        </button>
        <button
          onClick={this.setAnswers}
          className="bntred"
          type="submit"
          name="geschmack_herb"
        >
          Herb
        </button>
        <button
          onClick={this.setAnswers}
          className="bntred"
          type="submit"
          name="geschmack_scharf"
        >
          Scharf
        </button>
        <br></br>

        <button className="bntw" type="text">
          Basis:
        </button>
        <br></br>
        <button
          onClick={this.setAnswers}
          className="bntred"
          type="submit"
          name="basis_wodka"
        >
          Wodka
        </button>
        <button
          onClick={this.setAnswers}
          className="bntred"
          type="submit"
          name="basis_rum"
        >
          Rum
        </button>
        <button
          onClick={this.setAnswers}
          className="bntred"
          type="submit"
          name="basis_tequila"
        >
          Tequila
        </button>
        <button
          onClick={this.setAnswers}
          className="bntred"
          type="submit"
          name="basis_gin"
        >
          Gin
        </button>
        <button
          onClick={this.setAnswers}
          className="bntred"
          type="submit"
          name="basis_whiskey"
        >
          Whiskey
        </button>
        <button
          onClick={this.setAnswers}
          className="bntred"
          type="submit"
          name="basis_likoer"
        >
          Likör
        </button>
        <br></br>

        <button className="bntw" type="text">
          Size:
        </button>
        <br></br>
        <button
          onClick={this.setAnswers}
          className="bntred"
          type="submit"
          name="size_kurz"
        >
          Kurz
        </button>
        <button
          onClick={this.setAnswers}
          className="bntred"
          type="submit"
          name="size_lang"
        >
          Lang
        </button>
        <button
          onClick={this.setAnswers}
          className="bntred"
          type="submit"
          name="size_extraLang"
        >
          Extra-Lang
        </button>
        <button
          onClick={this.setAnswers}
          className="bntred"
          type="submit"
          name="size_heiss"
        >
          Heiss
        </button>
        <br></br>

        <br></br>
        <button onClick={this.getDrinks} className="bntgreen" type="submit">
        <Link to="/gefunden" className="Pagelink">
          Senden
          </Link>
        </button>
        <br></br>

        <a href="#hl">
          {" "}
          <img className="nachoben" src={Oben} alt="Nach oben" />
        </a>
      </div>
    );
  }
}

export default Suche;
