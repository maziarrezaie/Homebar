import React, { Component } from "react";


const axios = require("axios");
export class Regform extends Component {
  state = {
    newUser: {
      anrede: "",
      uname: "",
      uvorname: "",
      uemailadress: "",
      ugeburtsdatum: "",
      upassword: "",
      upasswordwieder: ""
    }
  };

  changeHandler = e => {
    this.setState({
      newUser: {
        ...this.state.newUser,
        [e.target.id]: e.target.value
      }
    });
  };

  addUser = () => {
    axios
      .post("http://localhost:5000/users/add", this.state.newUser)
      .then(res => {
        console.log(res);
      });
  };

  render() {
    return (
      <div className="Add new Coktail to the List">
        <div className="headline">
          <span>Registrierung</span>
        </div>
        <div className="addcontainer">
          <form
            className="addform"
            onSubmit={e => {
              e.preventDefault();
              this.addUser();
            }}
          >
            <div className="schalter">
              <select
                className="wahlfeld"
                id="anrede"
                required
                onChange={this.changeHandler}
              >
                <option value="">Anrede*</option>
                <option value="Weiblich">Weiblich</option>
                <option value="Männlich">Männlich</option>
              </select>
              <br></br>
            </div>
            <label className="fildlable">Name*:</label>
            <input
              className="addfild"
              id="uname"
              type="text"
              onChange={this.changeHandler}
              required
            />
            <br></br>
            <label className="fildlable">Vorname*:</label>
            <input
              className="addfild"
              id="uvorname"
              type="text"
              onChange={this.changeHandler}
              required
            />
            <br></br>
            <label className="fildlable">E-Mail Adresse*:</label>
            <input
              className="addfild"
              id="uemailadress"
              type="text"
              onChange={this.changeHandler}
              required
            />
            <br></br>
            <label className="fildlable">Geburtsdatum*:</label>
            <input
              className="addfild"
              id="ugeburtsdatum"
              type="date"
              onChange={this.changeHandler}
              required
            />
            <br></br>
            <label className="fildlable">Password*:</label>
            <input
              className="addfild"
              id="upassword"
              type="password"
              minlength="4"
              onChange={this.changeHandler}
              required
            />
            <br></br>
            <label className="fildlable">Password wiederholen*:</label>
            <input
              className="addfild"
              id="upasswordwieder"
              type="password"
              minlength="4"
              onChange={this.changeHandler}
              required
            />

            <br></br>
            <input
              className="addbutton"
              type="submit"
              value="Jetzt Registerieren"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Regform;
