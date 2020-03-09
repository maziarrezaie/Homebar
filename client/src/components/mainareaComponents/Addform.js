import React, { Component } from "react";

const axios = require("axios");
export class Addform extends Component {
  state = {
    newDrink: {
      cname: "",
      basis: "",
      staerke: "",
      geschmack: "",
      size: "",
      rezept: [],
      zubreitung: "",
      technik: "",
      eis: "",
      menge: "",
      zutat: ""
    }
  };

  changeHandler = e => {
    this.setState({
      newDrink: {
        ...this.state.newDrink,
        [e.target.id]: e.target.value
      }
    });
  };

  rezeptContent = () => {
    this.setState({
      newDrink: {
        ...this.state.newDrink,
        rezept: [
          ...this.state.newDrink.rezept,
          { menge: this.state.newDrink.menge, zutat: this.state.newDrink.zutat }
        ],
        menge: "",
        zutat: ""
      }
    });
  };

  addDrinks = () => {
    axios
      .post("http://localhost:5000/drinks/add", this.state.newDrink)
      .then(res => {
        console.log(res);
      });
  };

  render() {
    return (
      <div className="Add new Coktail to the List">
        <div className="headline">
          <span>Administration</span>
        </div>
        <div className="addcontainer">
          <form
            className="addform"
            onSubmit={e => {
              /* e.preventDefault(); */
              this.addDrinks();
            }}
          >
            <label className="fildlable">Cocktail Name:</label>
            <input
              className="addfild"
              id="cname"
              type="text"
              onChange={this.changeHandler}
              required
            />
            <br></br>
            <label className="fildlable">Basis:</label>
            <input
              className="addfild"
              id="basis"
              type="text"
              onChange={this.changeHandler}
              required
            />
            <br></br>
            <label className="fildlable">Staerke:</label>
            <input
              className="addfild"
              id="staerke"
              type="text"
              onChange={this.changeHandler}
              required
            />
            <br></br>
            <label className="fildlable">Geschmack:</label>
            <input
              className="addfild"
              id="geschmack"
              type="text"
              onChange={this.changeHandler}
              required
            />
            <br></br>
            <label className="fildlable">Size:</label>
            <input
              className="addfild"
              id="geschmak"
              type="text"
              onChange={this.changeHandler}
              required
            />
            <br></br>
            <label className="fildlable">Rezept:</label>
            <div className="rezept">
              <input
                className="addfildrezept"
                id="menge"
                type="text"
                value={this.state.newDrink.menge}
                placeholder="Menge in cl"
                onChange={this.changeHandler}
                required
              />
              <input
                className="addfildrezept"
                id="zutat"
                type="text"
                value={this.state.newDrink.zutat}
                placeholder="Zutat"
                onChange={this.changeHandler}
                required
              />
              <button
                className="addzutat"
                onClick={e => {
                  e.preventDefault();
                  this.rezeptContent();
                }}
                required
              >
                +
              </button>
            </div>
            <br></br>
            <div className="uebertrag">
              {this.state.newDrink.rezept
                ? this.state.newDrink.rezept.map((item, index) => {
                    console.log(item.menge + "_" + item.zutat);
                    return (
                      <span id="rezeptuebertrag" key={index}>
                        {item.menge + " " + item.zutat} <br></br>
                      </span>
                    );
                  })
                : null}
            </div>
            <br></br>
            <label className="fildlable">Zubreitung:</label>
            <textarea
              className="addfildzubreitung"
              id="zubreitung"
              type="input"
              onChange={this.changeHandler}
              required
            />
            <br></br>
            <div className="schalter">
              <select
                className="wahlfeld"
                id="technik"
                onChange={this.changeHandler}
                required
              >
                <option value="">Technik </option>
                <option value="Shaken">Shaken</option>
                <option value="Blenden">Blenden</option>
                <option value="Ruhren">Ruhren</option>
                <option value="Schichten">Schichten</option>
              </select>
              <br></br>
              <select
                className="wahlfeld"
                id="eis"
                onChange={this.changeHandler}
                required
              >
                <option value="">Servie eis</option>
                <option value="Wuerfeleis">Wuerfeleis</option>
                <option value="Crasheis">Crasheis</option>
                <option value="Ohne Eis">Ohne Eis</option>
              </select>
            </div>
            <br></br>
            <input className="addbutton" type="submit" value="Add Now" />
          </form>
        </div>
      </div>
    );
  }
}

export default Addform;
